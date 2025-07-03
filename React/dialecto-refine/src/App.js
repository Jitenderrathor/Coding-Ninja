import "./styles.css";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { getThemeValue } from "./themeContext";
import { LanguageContextProvider } from "./languageContext";

export default function App() {
  const { theme } = getThemeValue();

  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <div className={`App ${theme}`}>
          <Navbar />
          <Home />
        </div>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}
