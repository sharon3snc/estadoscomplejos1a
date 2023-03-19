import { useContext } from "react";
import { LangContext } from "./langContext";

const Text = () => {
  const { lang } = useContext(LangContext);

  return <p>{lang === "en" ? "Hello world!" : "¡Hola mundo!"}</p>;
};

const Button = () => {
  const { lang, toggleLang } = useContext(LangContext);

  return (
    <button onClick={toggleLang}>
      {lang === "en" ? "Click me" : "Haz clic en mí"}
    </button>
  );
};

const Content = () => {
  return (
    <div className="content">
      <Text />
      <Button />
    </div>
  );
};

export default Content;
