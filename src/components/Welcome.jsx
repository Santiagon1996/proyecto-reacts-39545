import React from 'react'
import { Center, Box, Image, Heading, Flex } from "@chakra-ui/react";


const Welcome = () => {
    return (
        <div className='home-container'>
            <Center>
                <Box boxSize='sm'>
                    <Flex direction="column" alignItems="center">
                        <Heading mb="6">WELCOME</Heading>
                        <Image borderRadius="100px" marginTop="10px" src='https://domingogutierrez.com/wp-content/uploads/2019/07/www.emagister.com-gil-del-saz-and-asociados-corporation-sl-3415619-pack-de-4-cursos-online-cata-de-vino-maridaje-y-sumiller-y-prevencion-de-riesgos-laborales-en-hosteleria-31.jpg' alt="Imagen-Home" />
                    </Flex>

                </Box>
            </Center>
        </div>
    )
}
export default Welcome