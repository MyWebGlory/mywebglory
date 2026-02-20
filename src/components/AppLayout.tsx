
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StrategyCallPopup from "@/components/StrategyCallPopup";
import LiveViewersWidget from "@/components/LiveViewersWidget";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AppLayoutProps {
  children: React.ReactNode;
}


const AppLayout = ({ children }: AppLayoutProps) => {
  // Booking notification state
  const [showBookingNotif, setShowBookingNotif] = useState(false);

  // Play ting sound
  const playTingSound = () => {
    if (typeof window === 'undefined') return; // SSR guard
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1100, audioContext.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  // Show booking notification: first at 30-60s, then 5min wait, then 30-60s again, repeat
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR guard
    let timeoutId: NodeJS.Timeout;
    let isFirstShow = true;
    const showNotification = () => {
      setShowBookingNotif(true);
      playTingSound();
      // Hide after 10s
      setTimeout(() => {
        setShowBookingNotif(false);
      }, 10000);
    };
    const scheduleNext = () => {
      if (isFirstShow) {
        // First show: random 30-60s
        const randomDelay = Math.floor(Math.random() * 30000) + 30000;
        timeoutId = setTimeout(() => {
          showNotification();
          isFirstShow = false;
          // After first show, wait 5 min then schedule random 30-60s
          timeoutId = setTimeout(() => {
            scheduleNext();
          }, 300000); // 5 minutes
        }, randomDelay);
      } else {
        // Subsequent shows: random 30-60s
        const randomDelay = Math.floor(Math.random() * 30000) + 30000;
        timeoutId = setTimeout(() => {
          showNotification();
          // Wait 5 min then schedule next
          timeoutId = setTimeout(() => {
            scheduleNext();
          }, 300000); // 5 minutes
        }, randomDelay);
      }
    };
    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {children}
      {/* FOMO Elements Container - notification above viewers widget */}
      <div className="fixed bottom-20 left-4 z-50 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {showBookingNotif && (
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="pointer-events-auto"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md bg-background/90 border border-border/50 shadow-xl">
                <span className="text-xl">🎉</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Someone just booked a call</span>
                  <span className="text-xs text-muted-foreground">A few seconds ago</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <WhatsAppWidget />
      <StrategyCallPopup />
      <LiveViewersWidget />
    </>
  );
};

export default AppLayout;
