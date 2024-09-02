"use client";
import { useEffect, useState, useRef } from 'react';
import Hero from '@/components/organisms/hero/Hero';
import Works from '@/components/organisms/works/Works';
import Services from '@/components/organisms/services/Services';
import Phases from '@/components/organisms/phases/Phases';
import About from '@/components/organisms/about/About';
import Contact from '@/components/organisms/contact/Contact';
import Tools from '@/components/organisms/tools/Tools';
import Navbar from '@/components/organisms/navbar/Navbar';

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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const workItems = {
    label: 'Latest Works (2024)',
    view: 'Case Study Coming Soon',
    item: [
      {
        id: 1,
        name: 'Tyohaar Forever',
        url: '/images/tyohaarforever.png',
        tag: 'Development | Branding',
      },
      {
        id: 2,
        name: 'Amma Cabs',
        url: '/images/amma-cabs-2.png',
        tag: 'Design | Development | Branding',
      },
      {
        id: 3,
        name: 'Dolphin IBA',
        url: '/images/dolphiniba2.png',
        tag: 'Design | Development | Branding',
      },
      {
        id: 4,
        name: 'Alban Marcus',
        url: '/images/alban-marcus.png',
        tag: 'Design | Development | Branding',
      },
    ],
  };

  const blogItems = {
    label: 'Blogs (2024)',
    view: 'Read Article',
    item: [
      {
        id: 1,
        name: 'Blog 1',
        url: '/images/tyohaarforever.png',
        tag: 'HTML',
      },
      {
        id: 2,
        name: 'Blog 2',
        url: '/images/amma-cabs-2.png',
        tag: 'HTML | CSS',
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
        <About />
        <div ref={contactRef}>
          <Contact />
        </div>
        <Tools />
        <Works data={blogItems} />
      </main>
    </>
  );
}
