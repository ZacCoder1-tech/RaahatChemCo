import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { AboutUs } from "./Components/AboutUs";
import { Product } from "./Components/Product";
import { Infrastructure } from "./Components/Infrastructure";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Infrastructure" element={<Infrastructure />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
