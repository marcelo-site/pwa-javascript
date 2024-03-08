import React, { useEffect } from "react";

import { Container, Video, ScanMarker } from "./styles";
import Quagga from "quagga";

export function Scanner({ onScan }) {
  let scannerAttemps = 0;
  const onDetected = (result) => {
    Quagga.offDetected(onDetected);

    let isbn = result.codeResult.code;
    onScan(isbn);
    if (scannerAttemps < 5) {
      Quagga.onDetected(onDetected);
      scannerAttemps++;
    }
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
            src={process.env.PUBLIC_URL + "/images/scan-mark.png"}
            alt=""
            style={{ width: "min(600px, 100%)", marginBottom: 40 }}
            // width={"100%"}
            height={"auto"}
          />
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/images/ScanProductBarcode2.png"}
            alt=""
            width={100}
            height={80}
          />
          <p className="label">Aponte para o codigo de barras</p>
        </ScanMarker>
      </Container>
    </>
  );
}
