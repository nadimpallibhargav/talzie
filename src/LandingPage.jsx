import Header from "./components/header/Header";
import Banner from "./components/sections/banner/Banner";
import Clients from "./components/sections/clients/Clients";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Clients />
      </main>
    </>
  );
}

export default LandingPage;
