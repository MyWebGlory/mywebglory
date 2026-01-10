import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const PageLayout = ({ title, description, children, seoTitle, seoDescription, canonicalUrl, noIndex }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoTitle || title}
        description={seoDescription || description || "MyWebGlory - Event Marketing Agency"}
        canonicalUrl={canonicalUrl}
        noIndex={noIndex}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </section>
      
      {/* Content */}
      {children && (
        <section className="py-16">
          <div className="container px-4 md:px-6">
            {children}
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default PageLayout;
