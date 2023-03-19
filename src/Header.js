import { useContext } from "react";
import { LangContext } from "./langContext";

const Header = () => {
  const { lang, toggleLang } = useContext(LangContext);

  return (
    <div className="header">
      <h1>{lang === "en" ? "My App" : "Mi Aplicación"}</h1>
      <button onClick={toggleLang}>
        {lang === "en" ? "Español" : "English"}
      </button>
    </div>
  );
};

export default Header;
