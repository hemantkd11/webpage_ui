import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import WebPage from "./components/WebPlatform/Webpage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebCompany from "./components/companyWeb/CompanyPage";
import Contact from "./components/contacts/Contact";
import WebModel from "./components/model/Model";

import Nav from "./components/navigationBar/Nav";
import SlideShow from "./slideShow/slide";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/webpage_ui/" element={<WebPage />} />
          <Route path="/webpage_ui/aboutcompany" element={<WebCompany />} />
          <Route path="/webpage_ui/contact" element={<Contact />} />
          <Route path="/webpage_ui/modal" element={<WebModel />} />
          <Route path="/slide" element={<SlideShow />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
