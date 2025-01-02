import "./globals.css";
import { cn } from "@/lib/utils";
import { nunito, dm, baby, poppins } from "@/lib/fonts";
import Script from "next/script";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import SnowfallComponent from '../components/Snowfall/index';


// Define metadata
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}`),
  title: "Digital Marketing Agency for Online Growth | Adaired Digital",
  description:
    "Adaired Digital Media is your all-in-one digital marketing agency. Transform your business into a brand with - SEO, CPC, social media, web design services, etc.",
  alternates: {
    canonical: "/",
  },
};

// Google Analytics configuration
const gtagConfig = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5ZWYZ5BF47');
`;

// Schema JSON-LD data
const schemaData = {
  professionalService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AdAired Digital Media",
    image: "https://www.adaired.com/_next/static/media/Logo.441e7f4f.svg",
    url: "https://www.adaired.com/",
    telephone: "8907400008",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "5th Floor, Bestech Business Tower, B-509, Parkview Residence Colony, Sector 66, Sahibzada Ajit Singh Nagar, Punjab",
      addressLocality: "Mohali",
      postalCode: "160066",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.67625162,
      longitude: 76.7402769,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: [
      "https://www.facebook.com/adaired.digital/",
      "https://twitter.com/adaireddigital",
      "https://www.instagram.com/adaired.digital/",
      "https://in.linkedin.com/company/adaired",
      "https://www.adaired.com/",
    ],
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AdAired Digital Media",
    url: "https://www.adaired.com/",
    logo: "https://www.adaired.com/_next/static/media/Logo.441e7f4f.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "8907400008",
      contactType: "customer service",
      areaServed: ["IN", "US", "GB", "CA", "AU"],
      availableLanguage: ["en", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/adaired.digital/",
      "https://twitter.com/adaireddigital",
      "https://www.instagram.com/adaired.digital/",
      "https://in.linkedin.com/company/adaired",
      "https://www.adaired.com/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="IbErkjWfX4xDEzZjtgtMruxBWkCYRs6n19e55PaEtLw"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5ZWYZ5BF47"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {gtagConfig}
        </Script>

        {/* JSON-LD for Schema.org */}
        <Script
          type="application/ld+json"
          id="local-schema"
          strategy="lazyOnload"
        >
          {JSON.stringify(schemaData.professionalService)}
        </Script>
        <Script
          type="application/ld+json"
          id="organization-schema"
          strategy="lazyOnload"
        >
          {JSON.stringify(schemaData.organization)}
        </Script>
      </head>
      <body
        className={cn(
          "relative h-full antialiased",
          dm.variable,
          nunito.variable,
          baby.variable,
          poppins.variable
        )}
      >
        <ReCaptchaProvider reCaptchaKey="6LdkMHAqAAAAAOlEvKHUbYfKzfpKGr9jNOD0oorN">
          <NextTopLoader color="#FB9100" showSpinner={false} />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <Toaster />
          {/* <SnowfallComponent /> */}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
