import React from 'react'
import Item from './Item'
import { Container } from '@chakra-ui/react'

const ItemList = ({ productos }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
            stock={producto.stock}
            category={producto.category}
          />
        ))}
      </Container>
    </>

  )
}

export default ItemList