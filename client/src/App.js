import "./App.css";
import Banner1 from "./components/Home/Banner1";
import NavBar from "./components/Nav/NavBar";
import { useWindowSize } from "usehooks-ts";
import ThirdwaveBlurb from "./components/Home/ThirdwaveBlurb";
import Partners from "./components/Home/Partners";
import BlackFade from "./components/UI/BlackFade";

import background from "./images/bus1.jpeg";

function App() {
  const { width } = useWindowSize();

  return (
    <div className="App">
      <BlackFade
        backgroundImage={background}
        backgroundOpacity="0.7"
        containerStyle={{
          height: "45rem",
          width: "100%",
          position: "fixed",
          zIndex: "-1",
        }}
      />

      <NavBar />
      <Banner1 viewportWidth={width} />
      <ThirdwaveBlurb viewportWidth={width} />
      <Partners viewportWidth={width} />
    </div>
  );
}

export default App;
