import { Head } from "vite-react-ssg";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: object | object[];
  noIndex?: boolean;
}

const SITE_URL = "https://mywebglory.com";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/5zPXZ8wp1hc9eSePbWqgiJGlcjf2/social-images/social-1767871848304-MyWebGlory_purple.png";

// Organization schema - used on all pages
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MyWebGlory",
  url: SITE_URL,
  logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/5zPXZ8wp1hc9eSePbWqgiJGlcjf2/uploads/1767871814578-MyWebGlory_purple.png",
  description: "Boutique event marketing agency specializing in filling events with qualified attendees and generating revenue.",
  foundingDate: "2022",
  founder: {
    "@type": "Person",
    name: "Gabriel Ageron",
    jobTitle: "Founder & CEO",
    url: "https://www.linkedin.com/in/gabriel-ageron/"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33767096182",
    contactType: "sales",
    email: "gabriel@mywebglory.com",
    availableLanguage: ["English", "French"]
  },
  sameAs: [
    "https://www.linkedin.com/in/gabriel-ageron/",
    "https://wa.me/33767096182"
  ]
};

// LocalBusiness schema for homepage
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "MyWebGlory",
  image: DEFAULT_OG_IMAGE,
  description: "Event marketing agency that delivers end-to-end event marketing with proven systems for acquisition, show-up rates, and pipeline generation.",
  url: SITE_URL,
  telephone: "+33767096182",
  email: "gabriel@mywebglory.com",
  priceRange: "$$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522
    },
    geoRadius: "10000"
  },
  serviceType: ["Event Marketing", "Lead Generation", "Event Promotion", "Digital Marketing"]
};

// Service schema for pricing page
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event Marketing",
  provider: {
    "@type": "Organization",
    name: "MyWebGlory"
  },
  offers: [
    {
      "@type": "Offer",
      name: "Event Launch Engine",
      price: "9000",
      priceCurrency: "USD",
      description: "Essential event marketing package for launching your event"
    },
    {
      "@type": "Offer",
      name: "Revenue System",
      price: "25000",
      priceCurrency: "USD",
      description: "Complete revenue-focused event marketing system"
    },
    {
      "@type": "Offer",
      name: "Authority Flywheel",
      price: "50000",
      priceCurrency: "USD",
      description: "Premium event marketing with authority building"
    }
  ]
};

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  structuredData,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = title.includes("MyWebGlory") ? title : `${title} | MyWebGlory`;
  const fullCanonicalUrl = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="MyWebGlory" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Organization Schema - Always included */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Additional Structured Data - supports single object or array */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Head>
  );
};

export default SEO;
