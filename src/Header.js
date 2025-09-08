import "./App.css";
import React, { useState } from "react";
import { useTranslation } from "./TranslationContext";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import home from "./images/home.svg";
import mosque from "./images/mosque.svg";
import patners from "./images/patners.svg";
import contact from "./images/contact.svg";

const Header = () => {
  const { language, changeLanguage, translate } = useTranslation();
  const location = useLocation(); // Получаем текущий маршрут
  const isMosquePage = location.pathname === "/mosque";

  return (
    <header className="header">
      <select
        className={`language ${isMosquePage ? "language-mosque" : ""}`}
        id="language"
        onChange={(e) => changeLanguage(e.target.value)}
        value={language}
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
      <nav className="navigation">
        {/* Меню, которое меняется в зависимости от устройства */}

        <ul className="navigation_menu">
          <li
            className={`menu ${
              location.pathname === "/islamApp_test/" ? "menu_active" : ""
            }`}
          >
            <NavLink to="/islamApp_test/" exact>
              {translate("home")}
            </NavLink>
          </li>
          <li
            className={`menu ${
              location.pathname === "/mosque" ? "menu_active" : ""
            }`}
          >
            <NavLink to="/mosque">{translate("mosque")}</NavLink>
          </li>
          <li
            className={`menu ${
              location.pathname === "/patners" ? "menu_active" : ""
            }`}
          >
            <NavLink to="/partners">{translate("patners")}</NavLink>
          </li>
          <li
            className={`menu ${
              location.pathname === "/contact" ? "menu_active" : ""
            }`}
          >
            <NavLink to="/contact">{translate("contact")}</NavLink>
          </li>
        </ul>
      </nav>

      <nav className="mobile-navbar">
        <Link to="/islamApp_test/" className="nav-item">
        <img
            className="bar_img"
            src={home}
            alt="Для мечетей"
          />
          <span>
            <NavLink to="/islamApp_test/" exact>
              {translate("home")}
            </NavLink>
          </span>
        </Link>
        <Link to="/mosque" className="nav-item">
          <img
            className="bar_img mosque"
            src={mosque}
            alt="Для мечетей"
          />
          <span>
            <NavLink to="/mosque">{translate("mosque")}</NavLink>
          </span>
        </Link>
        <Link to="/patners" className="nav-item">
          <img className="bar_img patners" src={patners} alt="Партнерам" />
          <span>
            {" "}
            <NavLink to="/partners">{translate("patners")}</NavLink>
          </span>
        </Link>
        <Link to="/contact" className="nav-item">
          <img className="bar_img contact" src={contact} alt="О нас" />
          <span>
            <NavLink to="/contact">{translate("contact")}</NavLink>
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
