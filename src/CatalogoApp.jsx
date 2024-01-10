/* eslint-disable react/jsx-key */
import { useState } from "react";
import { ListTypes } from "./components/ListTypes";
import { produtos } from "./produtos";
import { MostraProduto } from "./components/MostraProduto";



export const CatalogoApp = () => {

  const [produto, setProduto] = useState();
  

  if (!produto) {
    const types = [...new Set(produtos.map((produto) => produto.type))];
   return <ListTypes types={types} produtos={produtos} setProduto={setProduto} />;
  }

  return <MostraProduto produto={produto} setProduto={setProduto} />
  
};
