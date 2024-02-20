import React from "react";

import { calculateScore } from "../../../services/books.js";

import { Container } from "./styles.js";

export default function Score({ book }) {
  const { color, label, recommended } = calculateScore(book.score);

  return (
    <Container scoreColor={color}>
      <div className="score">
        <span className="summary-score-value">{book.score}</span>
        <span>{label}</span>
      </div>
      {recommended && (
        <p className="score-comment">Recomendado pelos Editores</p>
      )}
    </Container>
  );
}
