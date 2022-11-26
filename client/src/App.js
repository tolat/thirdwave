import "./App.css";
import Banner1 from "./components/Home/Banner1";
import NavBar from "./components/Nav/NavBar";
import { useWindowSize } from "usehooks-ts";
import ThirdwaveBlurb from "./components/Home/ThirdwaveBlurb";
import Partners from "./components/Home/Partners";

import Testimonials from "./components/Home/Testimonials";
import Footer from "./components/Footer/Footer";
import NavDrawer from "./components/Nav/NavDrawer";

function App() {
  const { width } = useWindowSize();

  return (
    <div className="App">
      <NavDrawer />
      <NavBar viewportWidth={width} />
      <Banner1 viewportWidth={width} />
      <ThirdwaveBlurb viewportWidth={width} />
      <Partners viewportWidth={width} />
      <Testimonials viewportWidth={width} />
      <Footer viewportWidth={width} />
    </div>
  );
}

export default App;
