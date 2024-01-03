import { Box, Flex } from '@chakra-ui/react'
//import { About } from './about/about'
//import Galeria from './galeria/galeria'
//import { Testimonio } from './testimony/testimonio'
import { Portada } from './portada/portada'
//import { Especialidades } from './especialidades/especialidades'
export const Body = ({idioma}) => {

  return (
    <Box>    
        <Flex >
        <Portada idioma={idioma}/>
        </Flex> 

        {/* <Flex marginTop={'1%'}>
          <Especialidades/>
        </Flex>

        <Flex marginTop={'1%'}>
          <Testimonio/>
        </Flex>

        <Flex marginTop={'1%'}>
          <About/>
        </Flex>
        <Flex marginTop={'1%'}
        marginBottom={'1%'}>
          <Galeria/>
        </Flex> */}

    </Box>
  )
}
