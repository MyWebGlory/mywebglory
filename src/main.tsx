import { ViteReactSSG } from 'vite-react-ssg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import AppLayout from './components/AppLayout';
import { routes } from './routes';
import './index.css';

const queryClient = new QueryClient();

// Root layout component that provides all contexts
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <AppLayout>
          {children}
        </AppLayout>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Wrap all routes with the layout
const wrappedRoutes = routes.map(route => ({
  ...route,
  element: <RootLayout>{route.element}</RootLayout>,
}));

export const createRoot = ViteReactSSG({ routes: wrappedRoutes });
