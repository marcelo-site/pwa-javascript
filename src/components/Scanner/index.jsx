import React, { useEffect } from "react";

import { Container, Video, ScanMarker } from "./styles";
import Quagga from "quagga";
import { validateIsbn } from "../../services/books";

export function Scanner({ onScan }) {
  let scannerAttemps = 0;
  const onDetected = (result) => {
    Quagga.offDetected(onDetected);
    alert("isbn valido");

    let isbn = result.codeResult.code;
    if (validateIsbn(isbn)) {
      alert(isbn);
      onScan(isbn);
    } else {
      if (scannerAttemps > 4) {
        alert("Não é possivél ler o codigo do livro!");
        // return;
      }
      // return;
    }

    scannerAttemps++;
    Quagga.onDetected(onDetected);
  };
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#video"), // Or '#yourElement' (optional)
            constraints: {
              facingMode: "environment",
            },
          },
          numOfWorks: 1,
          lacate: true,
          decoder: {
            // readers : ["code_128_reader"]
            readers: ["ean_reader"],
          },
        },
        function (err) {
          if (err) {
            console.log(err);
            alert(
              "Erro ao abrir a camera do dispositvo, por favor, dê permissão de uso."
            );
            return;
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    } else {
      console.log("Erro1");
    }
  }, []);

  return (
    <>
      <Video id="video"></Video>
      <Container>
        <ScanMarker>
          <img
            src="../../../images/scan-mark.svg"
            alt=""
            width={260}
            height={260}
          />
          <p className="label">Aponte para o codigo de barras</p>
        </ScanMarker>
        <img
          className="logo"
          src="../../../images/logo.svg"
          alt=""
          width={137}
          height={70}
        />
      </Container>
    </>
  );
}
