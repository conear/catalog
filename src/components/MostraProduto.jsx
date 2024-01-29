/* eslint-disable react/prop-types */
import { showPrice } from "../helpers/showPrice";



export const MostraProduto = ({produto, setProduto}) => {
const {imgCode, description, marca, price} = produto;



  return (
   
      <div>
        <p>Descrição: <strong>{description.toLowerCase()}</strong></p>
        <p>Marca: <strong>{marca.toLowerCase()}</strong></p>
        <p>Preço: <strong>{showPrice(price)}</strong></p>
        <p><small>{imgCode}</small></p>
        <img src={`images/img_${imgCode}_hr.webp`} alt="" width={400}  title="Click para voltar" onClick={() => setProduto()} />
        
      </div>
    
  )
}
