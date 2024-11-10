import React, { createContext, useState, useContext } from 'react';
import translationsData from './translations.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  const changeLanguage = (lang) => {
    setLanguage(lang); // Эта строка должна корректно обновлять состояние
  };

  const translate = (key) => {
    return translationsData[language]?.[key] || key; // Убедитесь, что используется опциональная цепочка
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);