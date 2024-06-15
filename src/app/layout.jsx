import { Roboto_Condensed } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const robo = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Male Moda",
  description: "Indumentaria femenina Male Moda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={robo.className}>
        {children}
      <SpeedInsights /> 
      <Analytics /></body>
    </html>
  );
}
