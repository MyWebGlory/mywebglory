import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Proper HTML escaping to prevent injection attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize and escape inputs for HTML
    const sanitizedName = escapeHtml(name.slice(0, 100));
    const sanitizedEmail = email.slice(0, 255);
    const sanitizedCompany = company ? escapeHtml(company.slice(0, 100)) : "Not provided";
    const sanitizedMessage = escapeHtml(message.slice(0, 2000));

    console.log("Sending contact email from:", sanitizedEmail);

    // Send notification to Gabriel
    const notificationEmail = await resend.emails.send({
      from: "MyWebGlory <onboarding@resend.dev>",
      to: ["gabriel@mywebglory.com"],
      reply_to: sanitizedEmail,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company:</strong> ${sanitizedCompany}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Reply directly to this email to respond to ${sanitizedName}.</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation to the user
    const confirmationEmail = await resend.emails.send({
      from: "MyWebGlory <onboarding@resend.dev>",
      to: [sanitizedEmail],
      subject: "We received your message - MyWebGlory",
      html: `
        <h2>Thank you for contacting us, ${sanitizedName}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li><a href="https://calendly.com/gabriel-ageron/mywebglory">Book a strategy call</a></li>
          <li><a href="https://wa.me/33767096182">Chat with us on WhatsApp</a></li>
        </ul>
        <hr>
        <p><strong>Your message:</strong></p>
        <p style="color: #666;">${sanitizedMessage.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>Gabriel Ageron<br>MyWebGlory</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    // Return generic error message to prevent information disclosure
    return new Response(
      JSON.stringify({ error: "Unable to send message. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
