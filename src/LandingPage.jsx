import { useRef } from "react";
import Header from "./components/header/Header";
import BannerV2 from "./components/sections/bannerV2/BannerV2";
import Clients from "./components/sections/clients/Clients";
import Contact from "./components/sections/contact/Contact";
import HowWeDo from "./components/sections/howwedo/HowWeDo";
import Services from "./components/sections/services/Services";
import CaseStudies from "./components/sections/casestudies/CaseStudies";
import Whyus from "./components/sections/whyus/Whyus";
import { tabs } from "./utlis/common";

function LandingPage() {
  const banner = useRef(null);
  const services = useRef(null);
  const clients = useRef(null)
  const caseStudies = useRef(null)
  const whyUs = useRef(null)
  const howWeDo = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <>
      <Header scrollToSection={scrollToSection} services={services} clients={clients} caseStudies={caseStudies} whyUs={whyUs} howWeDo={howWeDo} contact={contact} banner={banner}/>
      <main>
        <BannerV2 banner={banner}/>
        <Clients clients={clients}/>
        <Services tabs={tabs} autoCycleInterval={3500} services={services}/>
        <CaseStudies caseStudies={caseStudies} />
        <Whyus whyUs={whyUs}/>
        <HowWeDo howWeDo={howWeDo} contact={contact} scrollToSection={scrollToSection} />
        <Contact contact={contact}/>
      </main>
    </>
  );
}

export default LandingPage;
