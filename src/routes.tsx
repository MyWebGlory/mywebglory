import type { RouteRecord } from 'vite-react-ssg';
import Index from './pages/Index';
import Contact from './pages/Contact';
import EventMarketing from './pages/EventMarketing';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import BlogPostUltimateGuideEventMarketing from './pages/BlogPost-UltimateGuideEventMarketing';
import BlogPostEventMarketingPlaybook from './pages/BlogPost-EventMarketingPlaybook';
import NotFound from './pages/NotFound';

export const routes: RouteRecord[] = [
  { path: '/', element: <Index /> },
  { path: '/contact', element: <Contact /> },
  { path: '/event-marketing', element: <EventMarketing /> },
  { path: '/how-it-works', element: <HowItWorks /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/about', element: <About /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/ultimate-guide-event-marketing', element: <BlogPostUltimateGuideEventMarketing /> },
  { path: '/blog/event-marketing-playbook', element: <BlogPostEventMarketingPlaybook /> },
  { path: '*', element: <NotFound /> },
];
