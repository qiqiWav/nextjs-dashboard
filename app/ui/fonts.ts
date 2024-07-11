import { Playfair_Display, Lusitana } from "next/font/google";

export const roboto = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
