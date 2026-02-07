import { lazy } from 'react';
import Index from './pages/Index';

// Lazy-load all pages except the homepage for faster initial load
const Contact = lazy(() => import('./pages/Contact'));
const EventMarketing = lazy(() => import('./pages/EventMarketing'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Pricing = lazy(() => import('./pages/Pricing'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostUltimateGuideEventMarketing = lazy(() => import('./pages/BlogPost-UltimateGuideEventMarketing'));
const BlogPostEventMarketingPlaybook = lazy(() => import('./pages/BlogPost-EventMarketingPlaybook'));
const BlogPostBuildAuthorityEventContent = lazy(() => import('./pages/BlogPost-BuildAuthorityEventContent'));
const BlogPostTradeShowROI = lazy(() => import('./pages/BlogPost-TradeShowROI'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const routes = [
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
  { path: '/blog/build-authority-event-content-marketing', element: <BlogPostBuildAuthorityEventContent /> },
  { path: '/blog/trade-show-roi', element: <BlogPostTradeShowROI /> },
  { path: '*', element: <NotFound /> },
];
