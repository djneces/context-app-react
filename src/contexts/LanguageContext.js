import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState('spanish');

  const changeLanguage = (e) => setLanguage(e.target.value);

  return (
    <LanguageContext.Provider
      //same as {language: language, changeLanguage: changeLanguage}
      value={{ language, changeLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}
