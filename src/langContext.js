import { createContext, useState } from "react";

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  const value = {
    lang,
    toggleLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export { LangContext, LangProvider };
