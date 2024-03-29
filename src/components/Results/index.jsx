import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Container, Cover, Description } from "./styles";
import { products } from "../../dummyData";
import { useEffect, useState } from "react";

export const Results = () => {
  const { code } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getProdut = async () => {
      try {
        const res = products.filter(
          (item) => item.code.toString() === code.toString()
        )[0];

        if (res) {
          setProduct(res);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProdut();
  }, [code]);

  if (loading) {
    return (
      <Container>
        <p>Carregando...</p>
      </Container>
    );
  }

  return (
    <Container>
      {!product ? (
        <h2>Codigo: {code}</h2>
      ) : (
        <>
          <Link className="go-back" to="/">
            <MdArrowBack size={32} color="#2ecc71" />
          </Link>
          <Cover src={require("../../assets/images/" + product.image)} />
          <div>
            <h2>Detalhes</h2>
            <p>
              <span>Preço</span>:{" "}
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
