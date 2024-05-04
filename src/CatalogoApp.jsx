/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { ListTypes } from "./components/ListTypes";
//import { produtos } from "./produtos";
import { MostraProduto } from "./components/MostraProduto";



export const CatalogoApp = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/produtos.js';
    script.async = true;
    script.onload = () => {
      setProdutos(window.produtos);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [produto, setProduto] = useState();
  

  if (!produto) {
    const types = [...new Set(produtos.map((produto) => produto.type))];
   return <ListTypes types={types} produtos={produtos} setProduto={setProduto} />;
  }

  return <MostraProduto produto={produto} setProduto={setProduto} />
  
};
