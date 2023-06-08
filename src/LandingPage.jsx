import Header from "./components/header/Header";
import Banner from "./components/sections/banner/Banner";
import Clients from "./components/sections/clients/Clients";
import Services from './components/sections/services/Services'
import Whyus from "./components/sections/whyus/Whyus";
import { tabs } from "./utlis/common";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Clients />
        <Services tabs={tabs} autoCycleInterval={3000}/>
        <Whyus />
      </main>
    </>
  );
}

export default LandingPage;
