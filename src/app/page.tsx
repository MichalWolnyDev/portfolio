'use client';
import Navigation from "@/components/Navigation";
import Introduction from "@/components/Introduction";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { initGA, logPageView } from "../utils/ga";
import { useEffect, useState } from "react";


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only initialize Google Analytics on the client-side
    if (!mounted && typeof window !== 'undefined') {
      initGA();
      logPageView();
      setMounted(true);
    }
  }, [mounted]);
  
  return (
    <>
      <Navigation />
      <main className="">
        <Introduction />
        <Overview />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
