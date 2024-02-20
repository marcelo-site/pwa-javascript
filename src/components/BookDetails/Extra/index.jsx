import React from "react";

import { Container } from "./styles.js";

export default function Extra({ book }) {
  return (
    <>
      <Container>
        <span className="title">Tecnologias:</span>
        <p>{book.tecnologies && book.tecnologies.join(", ")}</p>
      </Container>
    </>
  );
}
