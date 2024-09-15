import "./App.css";
import { AboutUs } from "./components/about-us";
import { Catering } from "./components/catering/catering";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { MainNavigation } from "./components/layout/main-navigation/main-navigation";
import { Menu } from "./components/menu/menu";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainNavigation />
      <Hero />
      <AboutUs />
      <Menu />
      <Catering />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
