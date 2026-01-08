import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "33767096182";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your event marketing services.";

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <span className="bg-card text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-border hover:bg-accent transition-colors">
        Send a WhatsApp
      </span>
      <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
    </a>
  );
};

export default WhatsAppWidget;
