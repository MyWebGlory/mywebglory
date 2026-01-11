import { ViteReactSSG } from 'vite-react-ssg';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import AppLayout from './components/AppLayout';
import { routes } from './routes';
import './index.css';

const queryClient = new QueryClient();

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    // Client-side initialization if needed
  },
  ({ app, router }) => {
    return (
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <AppLayout>
              {app}
            </AppLayout>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    );
  }
);
