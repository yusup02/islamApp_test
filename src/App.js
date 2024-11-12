import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { TranslationProvider, useTranslation } from "./TranslationContext";
import "./App.css";
import Header from "./Header";
import Mosque from "./Mosque";
import Partners from "./Partners";
import Contact from "./Contact";
import Home from "./Home";


const App = () => {
  return (
    <TranslationProvider>
      <Router>
        <Header />
        <MainContent />
      </Router>
    </TranslationProvider>
  );
};

const MainContent = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/mosque") {
      document.body.classList.add("mosque-background");
      document.body.classList.remove("default-background");
    } else {
      document.body.classList.add("default-background");
      document.body.classList.remove("mosque-background");
    }

    return () => {
      document.body.classList.remove("mosque-background", "default-background");
    };
  }, [location.pathname]);


  return (
    <div>
      <Routes>
        <Route path="/mosque" element={<Mosque />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/islamApp_test" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;