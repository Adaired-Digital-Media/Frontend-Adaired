import { MetadataRoute } from "next";

const robots = async () => {
  const siteUrl: any = process.env.NEXT_PUBLIC_DOMAIN_NAME;

  const metaRobots: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
  return metaRobots;
};

export default robots;
