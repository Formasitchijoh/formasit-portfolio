import {
  Inter,
  Roboto_Mono,
  Roboto,
  Roboto_Condensed,
  Poppins,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const roboto = Roboto_Mono({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  weight: ["400"],
});

export const roboto_condensed = Roboto_Condensed({
  subsets: ["cyrillic"],
  variable: "--font-roboto-condensed",
  weight: ["500"],
});
