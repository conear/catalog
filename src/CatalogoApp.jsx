/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { ListTypes } from "./components/ListTypes";
//import { produtos } from "./produtos";
import { MostraProduto } from "./components/MostraProduto";



export const CatalogoApp = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('/produtos.js')
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro ao carregar produtos:', error));
  }, []);

  const [produto, setProduto] = useState();
  

  if (!produto) {
    const types = [...new Set(produtos.map((produto) => produto.type))];
   return <ListTypes types={types} produtos={produtos} setProduto={setProduto} />;
  }

  return <MostraProduto produto={produto} setProduto={setProduto} />
  
};
