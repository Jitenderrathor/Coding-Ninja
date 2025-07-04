import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <div className={`App ${theme}`}>
      {/* Add context provider here */}
      <themeContext.Provider value={{ theme, setTheme }}>
        <languageContext.Provider value={{ language, setLanguage }}>
          <Navbar />
          <Home />
        </languageContext.Provider>
      </themeContext.Provider>
    </div>
  );
}
