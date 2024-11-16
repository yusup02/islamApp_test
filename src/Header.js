import "./App.css";
import React, { useState } from "react";
import { useTranslation } from "./TranslationContext";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { language, changeLanguage, translate } = useTranslation();
  const location = useLocation(); // Получаем текущий маршрут
  const isMosquePage = location.pathname === "/mosque";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <select
        className={`language ${isMosquePage ? "language-mosque" : ""}`}
        id="language"
        onChange={(e) => changeLanguage(e.target.value)}
        value={language}
      >
        <option value="ru">🇷🇺 RU</option>
        <option value="en">🇺🇸 EN</option>
      </select>
      <nav className="navigation">
        {/* Меню, которое меняется в зависимости от устройства */}

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul
          className={`navigation_menu ${
            isOpen ? "dropdown-content open" : "dropdown-content"
          }`}
        >
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
    </header>
  );
};

export default Header;
