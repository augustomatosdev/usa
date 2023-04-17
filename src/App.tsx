import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Home from "./pages/home";
import Mamography from "./pages/mamography";
import MamographyAplly from "./pages/mamography-apply";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mamography" element={<Mamography />} />
        <Route path="/mamography/apply" element={<MamographyAplly />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
