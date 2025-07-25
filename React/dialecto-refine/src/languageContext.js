import { createContext, useContext, useState } from "react";

export const languageContext = createContext();

// debug the below custom hook
export const getLanguageValue = () => {
  const value = useContext(languageContext);
  return value;
};

// debug the below context Provider
export const LanguageContextProvider = () => {
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider
      value={{ language, setLanguage }}
    >
    </languageContext.Provider>
  );
};
