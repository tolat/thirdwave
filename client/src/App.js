import "./App.css";
import { useWindowSize } from "usehooks-ts";
import { Route, Routes } from "react-router-dom";

import HOME from "./pages/Home/HOME";

function App() {
  const { width } = useWindowSize();

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HOME viewportWidth={width} />} />
      </Routes>
    </div>
  );
}

export default App;
