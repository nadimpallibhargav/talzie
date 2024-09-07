"use client";
import { useEffect, useState, useRef } from "react";
import Hero from "@/components/organisms/hero/Hero";
import Works from "@/components/organisms/works/Works";
import Services from "@/components/organisms/services/Services";
import Phases from "@/components/organisms/phases/Phases";
import About from "@/components/organisms/about/About";
import Contact from "@/components/organisms/contact/Contact";
import Tools from "@/components/organisms/tools/Tools";
import Navbar from "@/components/organisms/navbar/Navbar";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const worksRef = useRef(null);
  const servicesRef = useRef(null);
  const phasesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const workItems = {
    label: "Latest Works (2024)",
    view: "Case Study Coming Soon",
    item: [
      {
        id: 1,
        name: "Tyohaar Forever",
        url: "/images/tyohaarforever.webp",
        tag: "Development | Branding",
      },
      {
        id: 2,
        name: "Amma Cabs",
        url: "/images/amma-cabs-2.webp",
        tag: "Design | Development | Branding",
      },
      {
        id: 3,
        name: "Dolphin IBA",
        url: "/images/dolphiniba2.webp",
        tag: "Design | Development | Branding",
      },
      {
        id: 4,
        name: "Alban Marcus",
        url: "/images/alban-marcus.webp",
        tag: "Design | Development | Branding",
      },
    ],
  };

  const blogItems = {
    label: "Blogs (2024)",
    view: "Read Article",
    nav: true,
    item: [
      {
        id: 1,
        name: "The ChatGPT Hype Is Over — Now Watch How Google Will Kill ChatGPT.",
        url: "/images/blog1.webp",
        tag: "AI Showdown",
      },
      {
        id: 2,
        name: "Why Can’t Robots Click the “I’m Not a Robot” Box on Websites?",
        url: "/images/blog2.webp",
        tag: "CAPTCHA Explained",
      },
      {
        id: 3,
        name: "Elevate Your Digital Presence with Expert Web Design and Development",
        url: "/images/blog31.webp",
        tag: "About Talzie",
      },
      {
        id: 4,
        name: "Why MVP is No Longer Enough: It's Time to Focus on MVE (Minimum Viable Experience)",
        url: "/images/blog4.webp",
        tag: "Focus on MVE",
      },
    ],
  };

  return (
    <>
      <Navbar
        sections={{
          worksRef,
          servicesRef,
          phasesRef,
          contactRef,
        }}
      />
      <main>
        <Hero />
        <div ref={worksRef}>
          <Works data={workItems} />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={phasesRef}>
          <Phases />
        </div>
        <Tools />
        <div ref={contactRef}>
          <Contact />
        </div>
        <Works data={blogItems} />

        <About />
      </main>
    </>
  );
}
