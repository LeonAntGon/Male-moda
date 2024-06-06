import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robo = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Male Moda",
  description: "Indumentaria femenina Male Moda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robo.className}>{children}</body>
    </html>
  );
}
