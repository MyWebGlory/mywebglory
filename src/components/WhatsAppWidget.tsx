import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "33767096182";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your event marketing services.";

const WhatsAppWidget = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 bg-card text-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppWidget;
