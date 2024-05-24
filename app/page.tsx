"use client";

import About from "@/components/About";
import CanvasContainer from "@/components/CanvasContainer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Lenis from "lenis";
import { useEffect } from "react";
import { BuyNow } from "@/components/BuySection";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer/Footer1";
import Logo from "@/components/Logo";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="">
      <Logo/>
      <div className="h-[100vh] w-full fixed top-0 z-10 hidden lg:block">
        <CanvasContainer />
      </div>
      <Header />
      <Hero />
      <About />
      <BuyNow />
      <Parallax />
      <Footer />
    </main>
  );
}
