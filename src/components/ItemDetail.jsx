import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";
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
  Center,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";

const ItemDetail = ({ product }) => {
  const { counter, setCounter, cart, setCart, cartItems } =
    useContext(CounterContext);
  return (
    <>
      <Center mt={10}>
        <Card maxW="sm" className="card">
          <CardBody>
            <Center>
              <Image
                src={product.image}
                alt={`Imagen del producto ${product.name} `}
                borderRadius="lg"
                className="itemImage"
              />
            </Center>
            <Stack mt="6" spacing="5">
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Flex>
                <Box>
                  <Text color="blue.600" fontSize="2xl">
                    ${product.price}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize="2xl">Stock: {product.stock}</Text>
                </Box>
              </Flex>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="12">
              <ItemQuantitySelector stock={product.stock} />
              <Button
                onClick={() => {
                  setCart(cart + counter);
                  setCounter(0);
                  if (counter != 0) {
                    cartItems.push([product.name, product.price, counter]);
                  } else {
                    alert("Debe indicar la cantidad");
                  }
                }}
                colorScheme="teal"
              >
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
          <Button
            onClick={() => setCounter(0)}
            variant="ghost"
            colorScheme="teal"
          >
            <Link to={"/catalogue"}>Volver</Link>
          </Button>
        </Card>
      </Center>
    </>
  );
};

export default ItemDetail;
