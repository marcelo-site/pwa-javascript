import React from "react";

import { calculateScore } from "../../../services/books.js";

import { Container, Score, Value } from "./styles.js";

export default function Scores({ book }) {
  return (
    <Container>
      {book.scores &&
        book.scores.map((b) => (
          <Score scoreColor={calculateScore(b.value).color} key={b.id}>
            <Value scoreColor={calculateScore(b.value).color}>
              <span>{b.value}</span>
            </Value>
            <span>{b.name}</span>
          </Score>
        ))}
    </Container>
  );
}
