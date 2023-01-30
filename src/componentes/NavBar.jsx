import CartWidget from "./CartWidget"
import { Container, Flex, Spacer, Box, Heading, Center } from '@chakra-ui/react'
const NavBar = () => {
   const categorias = ["Vinos", "Champagnes", "Aperitivos", "Destilados"]
   return (
      <>
         <Container minW="85rem " bg="purple" color='black' >
            <Flex alignContent="center">
               <Box>
                  <Center h='100px'>
                     <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                          <Heading><a className="navbar-brand" href="#">Vivino</a></Heading>
                           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarNavDropdown">
                              {/* <ul className="navbar-nav">
                                 <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Vinos</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#">Aperitivos</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#">Champagne</a>
                                 </li>
                                 <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Destilados
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                       <li><a className="dropdown-item" href="#">Whiskey</a></li>
                                       <li><a className="dropdown-item" href="#">Gin</a></li>
                                       <li><a className="dropdown-item" href="#">Vodka</a></li>
                                    </ul>
                                 </li>
                              </ul>  */}
                              <ul className="navbar-nav">
                                 {categorias.map((cat, i) => (
                                    <li key={i} className="nav-item">
                                       <a className="nav-link" href="#">{cat}</a>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </nav>
                  </Center>
               </Box>
               <Spacer />
               <Box>
                  <Center h='100px' w='50px'>
                     <CartWidget  />
                  </Center>
               </Box>
            </Flex>
         </Container>
      </>
   )


}

export default NavBar