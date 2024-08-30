'use client';
import About from '@/components/organisms/about/About';
import Contact from '@/components/organisms/contact/Contact';
import Hero from '@/components/organisms/hero/Hero';
import Phases from '@/components/organisms/phases/Phases';
import Services from '@/components/organisms/services/Services';
import Tools from '@/components/organisms/tools/Tools';
import Works from '@/components/organisms/works/Works';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
    view: 'View Case Study',
    item: [
      {
        id: 1,
        name: 'Project Alpha',
      },
      {
        id: 2,
        name: 'Project Beta',
      },
      {
        id: 3,
        name: 'Project Gamma',
      },
      {
        id: 4,
        name: 'Project Delta',
      },
    ],
  };

  return (
    <main>
      <Hero />
      <Works data={workItems} />
      <Services />
      <Phases />
      <About />
      <Contact />
      <Tools />
      {/* <Work data={blogItems} /> */}
      {/* <Footer /> */}
    </main>
  );
}
