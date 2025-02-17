"use client";
import { ScrollProgress } from "@/components/ui/scroll-progress";

import useFluidCursor from "@/hooks/useFluidCursor";
import { useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import LandingPage from "@/components/pages/LandingPage";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    useFluidCursor(); 
  }, []);

  return (
    <>
      <Head>
        <title>Aman Mandal - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Aman Mandal, a Full-Stack Developer with expertise in React, Node.js, and MongoDB. Check out my portfolio for projects and experience."
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, React, Node.js, MongoDB, Portfolio, Aman Mandal"
        />
        <meta name="author" content="Aman Mandal" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://amancodes.com" />
        <meta property="og:title" content="Aman Mandal - Full-Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Hi, I'm Aman Mandal, a Full-Stack Developer with expertise in React, Node.js, and MongoDB. Check out my portfolio for projects and experience."
        />
        <meta property="og:image" content="https://amancodes.com/profile.png" />
        <meta property="og:url" content="https://amancodes.com" />
        <meta property="og:type" content="website" />
        
      
        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aman Mandal",
              "jobTitle": "Full-Stack Developer",
              "url": "https://amancodes.com",
              "image": "https://amancodes.com/profile.png",
              "sameAs": [
                "https://github.com/icmulnk57",
                "https://www.linkedin.com/in/aman-mandal-7bb7491b5"
              ]
            }),
          }}
        />
      </Head>

      <div className="min-h-screen">
        <ScrollProgress className="top-0" />
        <div className="fixed top-0 left-0 z-[2] pointer-events-none">
          <canvas id="fluid" className="w-screen h-screen" />
        </div>
        <LandingPage />
        <BottomNavigation />
      </div>
    </>
  );
}

