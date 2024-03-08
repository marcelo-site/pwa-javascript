import React from "react";

import { Scanner } from "../../components/Scanner";
import { useNavigate } from "react-router-dom";
import { ButtonApp } from "../../components/ButtonApp";

export default function Main() {
  const navigate = useNavigate();
  const detected = (data) => {
    return navigate("/product/" + data);
  };
  return (
    <>
      <ButtonApp />
      <Scanner onScan={(data) => detected(data)} />
    </>
  );
}
