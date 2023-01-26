import React, { Children } from 'react'


const Card = ({Children,className,onClick})=> {
  return (
  <article className={'{card ${className} '} onClick={onClick}>{Children}

  </article>
  )
}



export default Card
