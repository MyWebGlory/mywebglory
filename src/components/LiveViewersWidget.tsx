import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LiveViewersWidget = () => {
  const [viewerCount, setViewerCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show counter after 5s delay
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR guard
    const showTimeout = setTimeout(() => {
      setViewerCount(Math.floor(Math.random() * 6) + 3);
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(showTimeout);
  }, []);

  // Gradual changes every 15-45s
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR guard
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      const change = Math.random() > 0.5 ? 1 : -1;
      setViewerCount((prev) => {
        const newCount = prev + change;
        if (newCount < 2) return 2;
        if (newCount > 15) return 15;
        setIsIncreasing(change > 0);
        setTimeout(() => setIsIncreasing(false), 2000);
        return newCount;
      });
    }, Math.random() * 30000 + 15000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="fixed bottom-6 left-4 z-40 gpu-accelerated"
          style={{ transform: 'translateZ(0)' }}
        >
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm border shadow-lg transition-all duration-500 bg-background/80 border-border/50 ${
              isIncreasing ? "shadow-green-500/30" : ""
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 ${
                  isIncreasing ? "animate-pulse" : ""
                }`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 bg-green-500 ${
                  isIncreasing ? "animate-pulse" : ""
                }`}
              ></span>
            </span>
            <span className="text-xs text-muted-foreground">
              {viewerCount} viewing now
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiveViewersWidget;
