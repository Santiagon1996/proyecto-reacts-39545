import React from 'react'

const ItemListContainer = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.mensaje}</h1>
    </>
  )
}

export default ItemListContainer