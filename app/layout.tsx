import { Google_Sans, Mozilla_Headline } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui/Custom/Navbar/Navbar";

const fontMozilla = Mozilla_Headline({
  subsets: ["latin"],
  variable: "--font-mozilla",
});
const fontGoogle = Google_Sans({
  subsets: ["latin"],
  variable: "--font-google",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMozilla.variable,
        fontGoogle.variable,
        "font-sans",
      )}
    >
      <body className="bg-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
