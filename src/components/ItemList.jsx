

import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Spacer,
  Flex,
  Button,
} from "@chakra-ui/react";

const ItemList = ({ products }) => {
  return (
    <div className="main-catalogue">
      {products.map((item) => (
        <Card maxW="sm" key={item.id} m={5} className="card">
          <CardBody>
            <Image
              src={item.image}
              alt={`Imagen producto ${item.name} `}
              borderRadius="lg"
              className="itemImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
              <Text className="textCardItem">{item.description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter >
            <Flex w="100%" spacing={4} direction="row" align="center">
              <Spacer />
              <ButtonGroup spacing="2">
                {item.stock === 0 ? (
                  <Button as={Button} colorScheme="red" size="md" mx="2">
                    Sin Stock
                  </Button>
                ) : (
                  <Link to={`/item/${item.id}`}>
                    <Button as={Button} colorScheme="teal" size="md" mx="2">
                      Pedir
                    </Button>
                  </Link>
                )}
              </ButtonGroup>
              <Spacer />
            </Flex>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;



<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>