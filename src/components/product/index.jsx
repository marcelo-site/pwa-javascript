import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Container, Cover, Description } from "./styles";
import { products } from "../../dummyData";
import { useEffect, useState } from "react";

export const Product = () => {
  const { code } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProdut = async () => {
      const res = products.filter(
        (item) => item.code.toString() === code.toString()
      )[0];
      if (res) {
        setProduct(res);
      }
    };
    getProdut();
  }, [code]);

  return (
    <Container>
      {!product ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Link className="go-back" to="/">
            <MdArrowBack size={32} color="#2ecc71" />
          </Link>
          <Cover src={require("../../assets/images/" + product.image)} />
          <div>
            <h2>Detalhes</h2>
            <p>
              <span>Precço</span>:{" "}
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>
              <span>Estoque</span>: {product.stock}
            </p>
            <Description>
              <h3>Descrição</h3>
              <p>{product.description}</p>
            </Description>
          </div>
        </>
      )}
    </Container>
  );
};
