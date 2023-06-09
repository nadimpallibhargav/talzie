import Header from "./components/header/Header";
import Banner from "./components/sections/banner/Banner";
import BannerV2 from "./components/sections/bannerV2/BannerV2";
import Clients from "./components/sections/clients/Clients";
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
        <Services tabs={tabs} autoCycleInterval={3000} />
        <Whyus />
        <HowWeDo />
        <Hiring />
      </main>
    </>
  );
}

export default LandingPage;
