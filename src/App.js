import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/style.css'
import VegaPay from "./components/VegaPlatform/VegaPay";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VegaCompany from "./components/companyVega/CompanyVega";
import Contact from "./components/contacts/Contact";
import VegaModel from "./components/model/Model";
import Slider from "./components/Slider";
import Nav from "./components/navigationBar/Nav";
import VegaModal from "./components/model/Model";
function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <VegaModal />
        <Routes>
          <Route path="/" element={<VegaPay />} />
          <Route path="/aboutcompany" element={<VegaCompany />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/modal" element={<VegaModel />} />
          <Route path="/slider" element={<Slider></Slider>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
