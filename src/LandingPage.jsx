import { useRef } from "react";
import Header from "./components/header/Header";
import BannerV2 from "./components/sections/bannerV2/BannerV2";
import Clients from "./components/sections/clients/Clients";
import Contact from "./components/sections/contact/Contact";
import Hiring from "./components/sections/hiring/Hiring";
import HowWeDo from "./components/sections/howwedo/HowWeDo";
import Services from "./components/sections/services/Services";
import Whyus from "./components/sections/whyus/Whyus";
import { tabs } from "./utlis/common";

function LandingPage() {
  const banner = useRef(null);
  const services = useRef(null);
  const clients = useRef(null)
  const whyUs = useRef(null)
  const howWeDo = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    console.log(elementRef)
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <>
      <Header scrollToSection={scrollToSection} services={services} clients={clients} whyUs={whyUs} howWeDo={howWeDo} contact={contact} banner={banner}/>
      <main>
        <BannerV2 banner={banner}/>
        <Clients clients={clients}/>
        <Services tabs={tabs} autoCycleInterval={3500} services={services}/>
        <Whyus whyUs={whyUs}/>
        <HowWeDo howWeDo={howWeDo}/>
        {/* <Hiring /> */}
        <Contact contact={contact}/>
      </main>
    </>
  );
}

export default LandingPage;
