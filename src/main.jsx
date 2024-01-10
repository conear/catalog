import React from "react";
import ReactDOM from "react-dom/client";
import { CatalogoApp } from "./CatalogoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
    <img src="images/Iluminar-logo.webp" alt="" height={"100px"} /><div><pre><strong>Catalogo</strong></pre></div>
    </header>
    <hr></hr>
    <CatalogoApp />
  </React.StrictMode>
);
