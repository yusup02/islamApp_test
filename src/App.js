import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { TranslationProvider } from "./TranslationContext"; // Убрал ненужный импорт useTranslation
import "./App.css";
import Header from "./Header";
import Mosque from "./Mosque";
import Partners from "./Partners";
import Contact from "./Contact";
import Home from "./Home";

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
    <Routes>
      <Route path="/mosque" element={<Mosque />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/islamApp_test/" element={<Home />} /> {/* Исправлен путь */}
      <Route path="/" element={<Home />} /> {/* Добавлен путь для главной страницы */}
    </Routes>
  );
};

const App = () => {
  return (
    <TranslationProvider>
      <Router>
        <AppContent /> {/* Оборачиваем контент в отдельный компонент */}
      </Router>
    </TranslationProvider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/islamApp_test/'; // Проверяем оба пути для главной страницы

  return (
    <div className="container">
      <Header />
      <MainContent />
    </div>
  );
};


export default App;