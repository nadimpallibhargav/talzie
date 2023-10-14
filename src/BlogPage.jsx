import { useRef } from "react";
import Header from "./components/header/Header";
import { Blog } from "./components/sections/blog/Blog";

function BlogPage() {
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
      behavior: "smooth",
    });
  };
    
  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        services={services}
        clients={clients}
        caseStudies={caseStudies}
        whyUs={whyUs}
        howWeDo={howWeDo}
        contact={contact}
        blog={blog}
        banner={banner}
      />
      <main>
        <Blog blog={blog} />
      </main>
    </>
  );
}

export default BlogPage;
