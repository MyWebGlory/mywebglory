import WhatsAppWidget from "@/components/WhatsAppWidget";
import StrategyCallPopup from "@/components/StrategyCallPopup";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      {children}
      <WhatsAppWidget />
      <StrategyCallPopup />
    </>
  );
};

export default AppLayout;
