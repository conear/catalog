/* eslint-disable react/prop-types */

export const MostraMiniatura = ({produto, setProduto}) => {

const {imgCode, description, marca} = produto;
//console.log(setProduto);
//const onImgClick = (e) => console.log(e);
const title = `${description}\n${marca}`;

  return (
   
      <div>
        <img src={`images/img_${imgCode}.webp`} alt="" title={title} onClick={() => setProduto(produto)} />
      </div>
    
  )
}
