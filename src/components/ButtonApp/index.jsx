import React, { useEffect, useState } from "react";
import { Container } from "./styles.js";

export const ButtonApp = () => {
  const [prompt, setPrompt] = useState(null);
  const [app, setApp] = useState(true);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      setPrompt(e);
      setApp(false);
    });
  }, []);

  const install = () => {
    prompt.prompt();
    prompt.userChoice.then((choiceResult) => {
      if (choiceResult === "accepted") {
        console.log("app instalado!");
        setApp(true);
      } else {
        console.log("app não instalado!");
        setApp(false);
      }
    });
  };

  // useEffect(() => {
  //   console.log(1);
  // }, [app]);

  return (
    <Container>
      {!app && (
        <button className="button" onClick={install}>
          Instalar App
        </button>
      )}
    </Container>
  );
};
