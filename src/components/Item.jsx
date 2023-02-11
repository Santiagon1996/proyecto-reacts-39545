import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ id, name, price, category }) => {
    return (
        <div>
            <div key={id} >
                <Center p="1rem">
                    <Card maxW='sm'className='card-main' >
                        <CardBody>
                            <Image
                                 src= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/200px-Bouteille.jpg"
                                alt='Botella'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{name}</Heading>
                                <Text color="black" fontSize="1">
                                    Category: {category}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    Price: {price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter className='card-footer'>
                            <Center className='btn-center'>
                    
                                    <Button variant='solid' colorScheme='blue'>
                                        <Link to={`/item/${id}`}>Detalle</Link>
                                    </Button>
                                
                            </Center>
                        </CardFooter>
                    </Card>
                </Center>
            </div>
        </div>
    )
}

export default Item
