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
  return (
    <>
      <Header />
      <main>
        <BannerV2 />
        <Clients />
        <Services tabs={tabs} autoCycleInterval={3500} />
        <Whyus />
        <HowWeDo />
        {/* <Hiring /> */}
        <Contact/>
      </main>
    </>
  );
}

export default LandingPage;
