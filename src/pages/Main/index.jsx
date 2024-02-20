import React, { useState } from "react";

import { Scanner } from "../../components/Scanner";
import { Results } from "../../components/Results";

export default function Main() {
  const [isbn, setIsbn] = useState("9788576082675");
  return (
    <>
      <Scanner onScan={setIsbn} />
      <Results isbn={isbn} />
    </>
  );
}
