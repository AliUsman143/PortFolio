import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Headersection from "../app/components/Headersection";
import PageTranstion from "../app/components/PageTranstion";
import StarTranstion from "../app/components/StarTranstion";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Headersection />
        <StarTranstion></StarTranstion>
        <PageTranstion>{children}</PageTranstion>
      </body>
    </html>
  );
}
