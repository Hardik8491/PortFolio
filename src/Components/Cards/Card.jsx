import './Card.css';


const Card = ({Children,className,onClick})=> {
  return (
  <article className={`card ${className}`} onClick={onClick}>
  
    {Children}
  

  </article>
  )
}



export default Card
