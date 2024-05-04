/* eslint-disable react/prop-types */

export const MostraMiniatura = ({produto, setProduto}) => {

const {imgCode, description, marca} = produto;
//console.log(setProduto);
//const onImgClick = (e) => console.log(e);
const title = `${description}\n${marca}\n${imgCode}`;

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
