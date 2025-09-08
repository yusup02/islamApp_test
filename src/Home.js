import mockupEN from "./images/mockup.png";
import ScreenEN from "./images/ScreenEN.heic";
import ScreenRU from "./images/ScreenRU.heic";
import Download from "./Download";
import "./App.css";
import React, { useEffect, useCallback, useState } from "react";
import { useTranslation } from "./TranslationContext";

// Маппинг для изображений
const images = {
  ScreenEN,
  ScreenRU,
};

const Home = () => {
  const { translate } = useTranslation();
  const mockup = translate("mockup");
  const [imagePath, setImagePath] = useState(null); // Состояние для imagePath




  useEffect(() => {
    console.log("mockupEN изменился:", mockupEN);
  }, [mockupEN]);

  useEffect(() => {
    if (mockup && mockup.image) {
      // Проверяем, что mockup и mockup.image существуют
      const path = images[mockup.image];
      if (path) {
        setImagePath(path);
      } else {
        console.error("Image not found for mockup:", mockup.image);
      }
    }
  }, [mockup]); // Зависимость от mockup

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.body.style.height = "100%";
    } else {
      document.documentElement.style.overflow = "visible";
      document.body.style.overflow = "visible";
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflowY = "visible"; // Возвращаем исходное значение
    };
  }, [handleResize]);

  if (!imagePath) {
    return <div>Loading...</div>; // Или другое сообщение/компонент-заглушка
  }


  return (
    <div className="title_inner">
      <div className="page-title">
        <h1 rel="preload" className="page-title_islamapp">IslamApp</h1>
        <p rel="preload" className="page-title_text">{translate("description")}</p>
        <Download />
      </div>

      <section className="islamApp">
        <div className="gradient-background"></div>
        <div className="mockup">
          <img
            rel="preload"
            className="islamApp_mockup"
            src={mockupEN}
            alt={mockup.alt}
            loading="lazy"
          />
          <img
            rel="preload"
            className="islamApp_screen"
            src={imagePath}
            alt={mockup.alt}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
