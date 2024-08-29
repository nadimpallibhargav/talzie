import { useEffect, useState } from 'react';
import Hero from './pages/hero/page';
import Services from './pages/services/page';
import Work from './pages/works/page';
import About from './pages/about/page';
import Phases from './pages/phases/page';
import Tools from './pages/tools/page';
import Contact from './pages/contact/page';
import Footer from './components/footer';

function LandingPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
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

  const blogItems = {
    label: 'Blogs (2024)',
    view: 'Read Article',
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
    <>
      <main>
        <Hero />
        <Work data={workItems} />
        <Services />
        <Phases />
        <About />
        <Contact />
        <Tools />
        <Work data={blogItems} />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
