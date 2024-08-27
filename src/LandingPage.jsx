import { useEffect, useRef, useState } from 'react';
import BannerV2 from './components/sections/bannerV2/BannerV2';
import Clients from './components/sections/clients/Clients';
// import Contact from "./components/sections/contact/Contact";
import HowWeDo from './components/sections/howwedo/HowWeDo';
// import Services from "./components/sections/services/Services";
import Whyus from './components/sections/whyus/Whyus';
import { tabs } from './utlis/common';
import { Blog } from './components/sections/blog/Blog';
import CaseStudiesV1 from './components/sections/casestudiesv1/CaseStudiesV1';
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

  const banner = useRef(null);
  const services = useRef(null);
  const clients = useRef(null);
  const caseStudies = useRef(null);
  const whyUs = useRef(null);
  const howWeDo = useRef(null);
  const contact = useRef(null);
  const blog = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

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

  // Array of objects with dummy content
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
        {/* <div
          className="custom-cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        /> */}
        {/* <BannerV2 banner={banner}/>
        <Clients clients={clients}/>
        <Services tabs={tabs} autoCycleInterval={3500} services={services}/>
        <CaseStudiesV1 contact={contact} caseStudies={caseStudies} /> 
        <Whyus whyUs={whyUs}/>
        <HowWeDo howWeDo={howWeDo} contact={contact} scrollToSection={scrollToSection} />
        <Blog blog={blog}/>
        <Contact contact={contact}/> */}
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
