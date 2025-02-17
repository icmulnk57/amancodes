import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Mandal - Full-Stack Developer Portfolio",
  description: "Hi, I'm Aman Mandal, a Full-Stack Developer with expertise in React, Node.js, and MongoDB. Check out my portfolio for projects and experience.",
  keywords: "Full-Stack Developer, React, Node.js, MongoDB, Portfolio, Aman Mandal",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background ", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
