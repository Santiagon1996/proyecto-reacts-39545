import { CardBody, Center,Card, Image, Stack,Heading,Text,Button,CardFooter,Divider,} from "@chakra-ui/react";
 // import botella from "../assets/botella1.jpg";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({productos}) => {
    const { id } = useParams();
  
    const productoFilter = productos.filter((producto) => producto.id == id);
    return (
      <>
        {productoFilter.map((producto) => (
          <div key={producto.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/200px-Bouteille.jpg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{producto.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Description: {producto.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Category: {producto.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {producto.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: U$D {producto.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount />
                  <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                      Buy
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
 