/* eslint-disable react/prop-types */

export const MostraMiniatura = ({produto, setProduto}) => {

const {imgCode, description, marca, price, qt} = produto;
//console.log(setProduto);
//const onImgClick = (e) => console.log(e);
const title = `${description.toLowerCase()}\n${marca.toLowerCase()}\n${price}\n${qt}`;

  return (
   
      <div>
        <img 
          src={`images/${imgCode}`} 
          alt="" title={title} 
          width="150px"
          height="200px"
          onClick={() => setProduto(produto)} />
      </div>
    
  )
}
