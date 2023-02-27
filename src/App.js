import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import VegaPay from "./components/VegaPlatform/VegaPay";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VegaCompany from "./components/companyVega/CompanyVega";
import Contact from "./components/contacts/Contact";
import VegaModel from "./components/model/Model";

import Nav from "./components/navigationBar/Nav";
import SlideShow from "./slideShow/slide";

function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/ui_webpage/" element={<VegaPay />} />
          <Route path="/ui_webpage/aboutcompany" element={<VegaCompany />} />
          <Route path="/ui_webpage/contact" element={<Contact />} />
          <Route path="/ui_webpage/modal" element={<VegaModel />} />
          <Route path="/slide" element={<SlideShow />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
