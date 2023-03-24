import CartWidget from "./CartWidget"
import { Container, Flex, Spacer, Box, Heading, Center, Menu, MenuButton, MenuList, MenuItem, Avatar, Button } from '@chakra-ui/react'
import { Link, NavLink } from "react-router-dom"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { CounterContext } from "../context/CounterContext";
import React, { useContext } from "react";

const NavBar = () => {

   const { cart } = useContext(CounterContext);

   function CheckCarrito({ cantidadProductos }) {
      if (cantidadProductos > 0) {
         return (
            <Link to={"/cart"}>
               <CartWidget />
            </Link>
         );
      } else {
         return (
            <button
               onClick={() => alert("El carrito esta vacio, debe contener algun producto")}
            >
               <CartWidget />
            </button>
         );
      }
   }

   return (
      <>
          <Container  bg="purple" color='black'  className="header"> 
            <Flex alignContent="center" gap="2" className="flex">
               <Avatar borderRadius="10px" name='Copa-NavBar' src='https://www.catadelvino.com/uploads/317201417030318552e.jpg' h='100px' w='50px' />
               <Box>
                  <Center h='100px'>
                     <Heading size="md">
                        <Link to={"/"}>Vivino</Link>
                     </Heading>
                  </Center>
               </Box>
               <Spacer />
               <Box  >
                  <Center h='100px'>
                     <Menu>
                        <Link to={"/catalogue"}>
                           <MenuButton as={Button} size="1g" variant="outline" colorScheme="green" m="5">
                              Catalogo
                           </MenuButton>
                        </Link>
                     </Menu>
                     <Menu>
                        <MenuButton as={Button} size="1g" variant="outline" colorScheme="green" rightIcon={<ChevronDownIcon />} m="5">
                           Categorias
                        </MenuButton>
                        <MenuList className="menu-list">
                           <NavLink to={`/category/${"Vinos"}`}>
                              <MenuItem>Vinos</MenuItem>
                           </NavLink>
                           <NavLink to={`/category/${"Champagne"}`}>
                              <MenuItem>Champagne</MenuItem>
                           </NavLink>
                           <NavLink to={`/category/${"Aperitivos"}`}>
                              <MenuItem>Aperitivos</MenuItem>
                           </NavLink>
                           <NavLink to={`/category/${"Destilados"}`}>
                              <MenuItem>Destilados</MenuItem>
                           </NavLink>
                        </MenuList>
                     </Menu>
                  </Center>
               </Box>
               <Spacer />
               <Box>
                  <Center h='100px' w='50px'>
                     <CheckCarrito cantidadProductos={cart} />
                  </Center>
               </Box>
            </Flex>
         </Container>

      </>
   )


}

export default NavBar
