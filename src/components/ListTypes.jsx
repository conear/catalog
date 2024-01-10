/* eslint-disable react/prop-types */

import { ListMinis } from "./ListMinis";

export const ListTypes = (props) => {
const { types, produtos, setProduto }=props;
//console.log(setProduto);
  return types.map((type) => {
    const itens = (tipo) => produtos.filter((p) => p.type === tipo);
    return (
      <div key={type} >
        {type}
        <hr />
        <div className="flex">
          <ListMinis produtos={itens(type)} setProduto={setProduto}/>
        </div>
        
      </div>
    );
  });
};
