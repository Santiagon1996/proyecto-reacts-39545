import React from 'react'
import { Image, Box, Center } from '@chakra-ui/react'


const Home = () => {
    return (
        <div className='home-container'>
            <Center>
                <Box boxSize='sm'>
                    <Image borderRadius="100px" marginTop="10px"  src='https://domingogutierrez.com/wp-content/uploads/2019/07/www.emagister.com-gil-del-saz-and-asociados-corporation-sl-3415619-pack-de-4-cursos-online-cata-de-vino-maridaje-y-sumiller-y-prevencion-de-riesgos-laborales-en-hosteleria-31.jpg' alt="Imagen-Home" />
                </Box>
            </Center>
        </div>
    )
}
//falta crear css de estilos en este caso Home-container y cambiar imagen
export default Home