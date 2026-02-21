const ClientLogosSlider = () => {
  return (
    <div className="w-full py-8 sm:py-10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground/50 text-center mb-5 font-medium">
        Brands that trust us to fill their events
      </p>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div
          className="flex items-center will-change-transform"
          style={{ animation: 'marquee 60s linear infinite', width: 'max-content' }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12 shrink-0">
              <img src="/images/client-logos/kornit-digital.png" alt="Kornit Digital" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" loading="lazy" />
              <img src="/images/client-logos/konnections.png" alt="Kornit Konnections" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" loading="lazy" />
              <img src="/images/client-logos/rxvp-logo.png" alt="RXVP" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" loading="lazy" />
              <img src="/images/client-logos/portfoliometrics.png" alt="Portfoliometrics" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" loading="lazy" />
              <img src="/images/client-logos/bill-and-melinda-gates-foundation.png" alt="Bill & Melinda Gates Foundation" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" loading="lazy" />
              <img src="/images/client-logos/cbhn-white.png" alt="CBHN" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogosSlider;
