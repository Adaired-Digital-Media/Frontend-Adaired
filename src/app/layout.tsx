import { cn } from "@/lib/utils";
import {
  Nunito_Sans,
  DM_Serif_Display,
  Oooh_Baby,
  Poppins,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});
const dm = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm",
});
const baby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baby",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ZWYZ5BF47');
          `}
        </Script>
        <Script type="application/ld+json" id="local-schema">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "AdAired Digital Media",
              "image": "https://www.adaired.com/_next/static/media/Logo.441e7f4f.svg",
              "@id": "",
              "url": "https://www.adaired.com/",
              "telephone": "8907400008",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5th Floor, Bestech Business Tower, B-509, Parkview Residence Colony, Sector 66, , Sahibzada Ajit Singh Nagar, Punjab",
                "addressLocality": "Mohali",
                "postalCode": "160066",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.67625162,
                "longitude": 76.7402769
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:30",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/adaired.digital/",
                "https://twitter.com/adaireddigital",
                "https://www.instagram.com/adaired.digital/",
                "https://in.linkedin.com/company/adaired",
                "https://www.adaired.com/"
              ]
            }
          `}
        </Script>
        <Script type="application/ld+json" id="organization-schema">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AdAired Digital Media",
              "alternateName": "AdAired Digital Media",
              "url": "https://www.adaired.com/",
              "logo": "https://www.adaired.com/_next/static/media/Logo.441e7f4f.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "8907400008",
                "contactType": "customer service",
                "areaServed": ["IN","US","GB","CA","AU"],
                "availableLanguage": ["en","Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/adaired.digital/",
                "https://twitter.com/adaireddigital",
                "https://www.instagram.com/adaired.digital/",
                "https://in.linkedin.com/company/adaired",
                "https://www.adaired.com/"
              ]
            }
          `}
        </Script>
      </head>
      <body
        className={cn(
          "relative h-full antialiased ",
          dm.variable,
          nunito.variable,
          baby.variable,
          poppins.variable
        )}
      >
        <ReCaptchaProvider reCaptchaKey="6Ldc49cpAAAAAPihLfrXDvYhtRKnwZAiKihVICxf">
          <main>{children}</main>
          <Toaster />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
