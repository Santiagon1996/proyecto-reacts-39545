// import { collection, getDocs, getFirestore } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import {
//     Card,
//     CardBody,
//     CardFooter,
//     Image,
//     Box,
//     Stack,
//     Heading,
//     Divider,
//     Text,
//     ButtonGroup,
//     Button,
//     Flex,
//   } from "@chakra-ui/react";

// const Collection = () => {
//     const [products, setProducts] = useState([])
//     useEffect(() => {
//         const fb = getFirestore()
//         const itemsCollection = collection(fb, "bebidas")
//         getDocs(itemsCollection).then((snapshot) => {
//             const docs = snapshot.docs.map((doc) => doc.product())
//             setProducts(docs)
//         })
//     }, [])

//     return (
//         <>
//             <h1>Producto</h1>
//             {products.map((item) => (
//                 <Flex
//                     wrap="wrap"
//                     justify="center"
//                     key={item.id}
//                     className="full-width f-wrap"
//                 >
//                     <Box m="5">
//                         <Card maxW="sm">
//                             <CardBody>
//                                 <Image
//                                     src={item.image}
//                                     alt={item.description}
//                                     borderRadius="lg"
//                                 />
//                                 <Stack mt="6" spacing="3">
//                                     <Heading size="md">{item.name}</Heading>
//                                     <Text>{item.description}</Text>
//                                     <Text color="blue.600" fontSize="2xl">
//                                         ${item.price}
//                                     </Text>
//                                 </Stack>
//                             </CardBody>
//                             <Divider />
//                             <CardFooter>
//                                 <ButtonGroup spacing="2">
//                                     <Button variant="solid" colorScheme="blue">
//                                         Comprar ahora
//                                     </Button>
//                                     <Button variant="ghost" colorScheme="blue">
//                                         Agregar al carro
//                                     </Button>
//                                 </ButtonGroup>
//                             </CardFooter>
//                         </Card>
//                     </Box>
//                 </Flex>

//             ))}
//         </>
//     )
// }

// // en el item list conteiner

// export default Collection
import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "bebidas");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <>
      {products.map((item) => (
        <Flex
          wrap="wrap"
          justify="center"
          key={item.id}
          className="full-width f-wrap"
        >
          <Box m="5">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={item.image}
                  alt={item.description}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.name}</Heading>
                  <Text>{item.description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${item.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Comprar ahora
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Agregar al carro
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default Collection;