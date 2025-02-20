import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import JsonData from "./Data/data.json";
import { About } from "./pages/About";
import Navigation from "./components/Navigation";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import Homepage from "./pages/Homepage";
import ServicePage from './pages/ServicePage';  // Import ServicePage
import SmoothScroll from "smooth-scroll";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="font-sans text-gray-800" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navigation />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Homepage header={landingPageData.Header} services={landingPageData.Services} about={landingPageData.About} gallery={landingPageData.Gallery} contact={landingPageData.Contact} />} />
          <Route path="/service-page" element={<ServicePage />} />  {/* Route for ServicePage */}
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/gallery" element={<Gallery data={landingPageData.Gallery} />} />
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
