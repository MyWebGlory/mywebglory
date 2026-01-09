import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import EventMarketing from "./pages/EventMarketing";
import HowItWorks from "./pages/HowItWorks";
import Offers from "./pages/Offers";
import AdsAcquisition from "./pages/AdsAcquisition";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event-marketing" element={<EventMarketing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/ads-acquisition" element={<AdsAcquisition />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
