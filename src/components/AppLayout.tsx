import WhatsAppWidget from "@/components/WhatsAppWidget";
import StrategyCallPopup from "@/components/StrategyCallPopup";
import LiveViewersWidget from "@/components/LiveViewersWidget";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      {children}
      <WhatsAppWidget />
      <StrategyCallPopup />
      <LiveViewersWidget />
    </>
  );
};

export default AppLayout;
