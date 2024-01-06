import { Box, Flex } from '@chakra-ui/react'
import { About } from './about/about'
import Galeria from './galeria/galeria'
import { Testimonio } from './testimony/testimonio'
import { Portada } from './portada/portada'
import { Especialidades } from './especialidades/especialidades'
export const Body = ({idioma, data}) => {

  return (
    <Box>    
        <Flex >
        <Portada idioma={idioma} data={data}/>
        </Flex> 

        <Flex marginTop={'1%'}>
          <Especialidades idioma={idioma}/>
        </Flex>

        {/* <Flex marginTop={'1%'}>
          <Testimonio idioma={idioma}/>
        </Flex> */}

        <Flex marginTop={'1%'}>
          <About idioma={idioma}/>
        </Flex>

        <Flex marginTop={'1%'}
        marginBottom={'1%'}>
          <Galeria idioma={idioma} data={data}/>
        </Flex>

    </Box>
  )
}
