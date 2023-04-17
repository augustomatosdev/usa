import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Home from "./pages/home";
import Mamography from "./pages/mamography";
import MamographyAplly from "./pages/mamography-apply";
import { Password } from "./pages/Password";
import { useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState<any>("");

  useEffect(() => {
    const storedPassword = localStorage.getItem("hadja-password");

    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);
  return (
    <BrowserRouter>
      {password ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mamography" element={<Mamography />} />
          <Route path="/mamography/apply" element={<MamographyAplly />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Password setPassword={setPassword} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
