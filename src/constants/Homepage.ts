export interface ServiceDetail {
  title: string;
  description: string;
  link: string;
  list: string[];
  mainSvg: string;
  hoverSvg: string;
  accentColor: string;
}

export interface LogoImage {
  img: string;
}

export interface ImageConfig {
  src: string;
  alt: string;
  height: number;
  width: number;
  className: string;
}

export const logoImages: LogoImage[] = [
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_1",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_2",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_3",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_4",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_5",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_6",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_7",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_8",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_9",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_10",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_11",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/trustedBy_12",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Website Designing & Development",
    description:
      "Website Design and development services that deliver exquisite design, a user-friendly interface, and robust functionality for lasting impressions on the audience.",
    link: "/services/web-designing-and-development",
    list: [
      "PHP Development",
      "Website management",
      "Website CMS migrations",
      "WordPress design & development",
      "Landing page design & development",
      "E-commerce website design & development",
    ],
    mainSvg: "Web Dev_JjQ6b",
    hoverSvg: "/assets/images/web-hover.svg",
    accentColor: "#038eb0",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Launch and maintain the websites on top of search results to enhance your online visibility with tried and tested Search Engine Optimization (SEO) services.",
    link: "/services/search-engine-optimization",
    list: [
      "Meta Tags Optimization",
      "Google tags Setup",
      "Schema Optimization",
      "Website Layout Optimization",
      "Website Broken Link Analysis",
      "Penalty Review & recovery",
    ],
    mainSvg: "Search Engine Optimization_eyQDn",
    hoverSvg: "/assets/images/seo-hover.svg",
    accentColor: "#f89520",
  },
  {
    title: "Strategic Social Media Management",
    description:
      "Enhance the social media presence of brands on diverse social platforms with engaging content to foster meaningful interactions and amplify reach.",
    link: "/services/strategic-social-media-management",
    list: [
      "Profile Optimization",
      "Targeted Page Likes",
      "Hashtag Trend Research",
      "Content Calendar",
      "Monthly Report",
    ],
    mainSvg: "Social Media_tzOgg",
    hoverSvg: "/assets/images/smm-hover.svg",
    accentColor: "#7fbe26",
  },
  {
    title: "Digital Creative & Logo Design",
    description:
      "The creative team illustrates the brand's image and ideas in captivating visuals to communicate with the target audience.",
    link: "/services/digital-creative-and-logo-design",
    list: [
      "Digital Broucher",
      "Email Marketing Graphics",
      "Logos and Branded Elements",
      "Poster, Banner and Signage",
      "Business Card, Letterhead and Envelope",
      "Social media graphics & digital marketing ads",
    ],
    mainSvg: "Logo Design_PpqcI",
    hoverSvg: "/assets/images/logo-hover.svg",
    accentColor: "#5c34b1",
  },
  {
    title: "Paid Media  & Advertising",
    description:
      "Building strategic ad campaigns and carrying data-driven optimizations to drive targeted traffic with our Pay-Per-Click (PPC) solutions.",
    link: "/services/paid-media-and-advertising",
    list: [
      "Social Ads",
      "Google Ads",
      "Conversion Tracking",
      "Google Analytics set up",
      "Overall Performance Analysis",
      "Campaign Management and Optimization",
    ],
    mainSvg: "Pay Per Click_pdGDn",
    hoverSvg: "/assets/images/ppc-hover.svg",
    accentColor: "#d71a1a",
  },
  {
    title: "Compelling Content Marketing",
    description:
      "Engaging and captivating content development that not only resonates with the audience but ranks well across all search engines.  ",
    link: "/services/compelling-content-marketing",
    list: [
      "Infographics",
      "Website Blogs",
      "Press Releases",
      "Website Copy",
      "Guest Posting",
      "Social Media Posting",
    ],
    mainSvg: "Content Marketing_iPYl2",
    hoverSvg: "/assets/images/content-marketing-hover.svg",
    accentColor: "#24a486",
  },
];

export const imageConfig: ImageConfig[] = [
  {
    src: "Static Website Images/TeamsBig",
    alt: "Growth Image",
    height: 800,
    width: 800,
    className:
      "max-w-[500px] lg:max-w-full after:absolute after:-top-3 after:-right-3 md:after:-top-6 md:after:-right-6 after:border-2 after:border-[#BC1D8D] after:h-[90%] after:w-[90%] after:-z-10",
  },
  {
    src: "Static Website Images/TeamsSmall",
    alt: "Growth Image",
    height: 100,
    width: 300,
    className:
      "absolute top-3/4 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:top-auto xl:left-auto xl:bottom-[20%] xl:right-[-20%]",
  },
];

export const features: string[] = [
  "Comprehensive Services",
  "Industry Expertise",
  "Client-Centric Approach",
  "Tailored Solutions",
];
