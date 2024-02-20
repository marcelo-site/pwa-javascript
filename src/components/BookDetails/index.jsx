import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Info from "./Info";
import Score from "./Score";
import Scores from "./Scores";
import Extra from "./Extra";
import { getBook } from "../../services/books";

export function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState({ isbn: null });

  useEffect(() => {
    (async () => {
      const res = await getBook(isbn);
      setBook(res);
    })();
  }, [isbn]);

  return (
    <>
      {book.isbn && (
        <>
          <Info book={book} />
          <Score book={book} />
          <Scores book={book} />
          <Extra book={book} />
        </>
      )}
    </>
  );
}
