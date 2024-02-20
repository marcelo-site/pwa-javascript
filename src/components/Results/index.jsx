import { useState, useEffect } from "react";
import { Container, ActionButons, Cover, Info, Wrapper } from "./styles";
import StarRatings from "react-star-ratings";
import { MdArrowForward } from "react-icons/md";

import { getBook } from "../../services/books";
import { Link } from "react-router-dom";

const api = process.env.REACT_APP_API_BASE_URL;

export function Results({ isbn }) {
  const [book, setBook] = useState();

  useEffect(() => {
    (async () => {
      const res = await getBook(isbn);
      setBook(res);
    })();
  }, [isbn]);

  return (
    <Container>
      {book && (
        <Link to={`/book/${isbn}`}>
          <Wrapper>
            <Cover
              //  src={book.coverImage}
              src={book.coverUrl}
            />

            <Info>
              <h4 className="name">{book.name}</h4>
              <div className="book-ratings">
                <StarRatings
                  rating={book.rating}
                  starRatedColor="#f1c40f"
                  starDimension="20"
                  starSpacing="0"
                  // changeRating={10}
                  // numberOfStars={10}
                  // starEmptyColor="3"
                  // ignoreInlineStyles={true}
                />{" "}
                (4.5)
              </div>
              <div className="price">
                <span className="discount">
                  R$ {Number(book.promotionalPrice).toFixed(2)}
                </span>{" "}
                por <span>R$ {Number(book.price).toFixed(2)}</span>
              </div>
            </Info>
            <ActionButons>
              <span className="button">
                <MdArrowForward size={32} color="#fff" />
              </span>
            </ActionButons>
          </Wrapper>
        </Link>
      )}
    </Container>
  );
}
