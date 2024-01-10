import { MostraMiniatura } from "./MostraMiniatura";

export const ListMinis = ({ produtos,setProduto }) => {
  //console.log(setProduto);
  return produtos.map((produto) => (
    <MostraMiniatura key={produto.imgCode} produto={produto} setProduto={setProduto}/>
  ));
};
