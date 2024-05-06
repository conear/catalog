/* eslint-disable react/prop-types */
import { showPrice } from "../helpers/showPrice";

export const MostraProduto = ({produto, setProduto}) => {
const {imgCode, description, marca, price, qt} = produto;



  return (
   
      <div className="contenedor">
        
        {/* <p><small>{imgCode}</small></p> */}
        <img src={`images/${imgCode}`} alt="" width={400}  title="Click para voltar" onClick={() => setProduto()} />
        <div className="texto">
          <p>Descrição: <strong>{description.toLowerCase()}</strong></p>
          <p>Marca: <strong>{marca.toLowerCase()}</strong></p>
          <p>Preço: <strong>{showPrice(price)}</strong></p>
          <p>Estoque: <strong>{qt}</strong></p>
        </div>
        
      </div>
    
  )
}
