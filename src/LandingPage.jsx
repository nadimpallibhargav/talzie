import Header from "./components/header/Header";
import Banner from "./components/sections/banner/Banner";
import Clients from "./components/sections/clients/Clients";
import Tabs from './components/sections/Tabs'
import { tabs } from "./utlis/common";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Clients />
        <Tabs tabs={tabs} autoCycleInterval={3000}/>
      </main>
    </>
  );
}

export default LandingPage;
