import React from "react";

import { Scanner } from "../../components/Scanner";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const detected = (data) => {
    return navigate("/product/" + data);
  };
  return <Scanner onScan={(data) => detected(data)} />;
}
