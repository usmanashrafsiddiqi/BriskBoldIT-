
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import JsonData from "./Data/data.json";
import { About } from "./pages/About";
import Navigation from "./components/Navigation";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import Homepage from "./pages/Homepage";
import ServicePage from './pages/ServicePage';
import SmoothScroll from "smooth-scroll";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";
import WhatsAppChat from "./pages/WhatsAppChat";
import PrivacyPolicy from './pages/PrivacyPolicy';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  
    // ✅ Inject Chatbase chatbot script
    const existingScript = document.getElementById("chatbase-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script"; // Give it a proper ID for future reference
      script.setAttribute("chatbotId", "77r-rKKkAT3anoDPOhwFy"); // If needed
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    }
  
    // ✅ Resize Chatbase widget after it loads
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector('iframe[src*="chatbase"]');
      if (iframe) {
        iframe.style.width = "350px";  // Set your desired width
        iframe.style.height = "500px"; // Set your desired height
        iframe.style.borderRadius = "12px"; // Optional: nice rounded corners
        observer.disconnect();
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }, []);
  

  return (
    <div
      className="font-sans text-gray-800"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navigation />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                header={landingPageData.Header}
                services={landingPageData.Services}
                about={landingPageData.About}
                gallery={landingPageData.Gallery}
                contact={landingPageData.Contact}
              />
            }
          />
          <Route path="/service-page" element={<ServicePage />} />
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/gallery" element={<Gallery data={landingPageData.Gallery} />} />
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default App;