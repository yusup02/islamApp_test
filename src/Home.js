import React from "react";
import { useTranslation } from "./TranslationContext";
import screen1 from "./images/screen_1.png";
import Download from './Download';
import "./App.css";

const Home = () => {
  const { translate } = useTranslation();

  return (
    <div>
      <main className="container">
        <div className="page-title">
          <h1 className="page-title_islamapp">IslamApp</h1>
          <p className="page-title_text">{translate("description")}</p>
        
             <Download />
        </div>
      </main>
      <section>
        <div className="gradient-background"></div>
        <div className="islamApp">
          <img className="islamApp_img" src={screen1} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
