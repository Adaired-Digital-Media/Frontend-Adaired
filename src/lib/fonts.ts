// lib/fonts.ts
import {
  Nunito_Sans,
  DM_Serif_Display,
  Oooh_Baby,
  Poppins,
} from "next/font/google";

export const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const dm = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm",
  display: "swap",
});

export const baby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baby",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});
