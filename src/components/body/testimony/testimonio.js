'use client'
import { ArenaContex } from '@/context/arenaProvider'
import { Box, Button, Flex, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Usuarios } from './usuarios'
import { datos } from './db'


export const Testimonio = () => {
    const  {idioma}= useContext(ArenaContex)
    const datosTestimonio =( idioma==='esp') ? datos?.esp : datos?.ing;
    const titulo= datosTestimonio.resenias.titulo
    const sub1= datosTestimonio.resenias.subtitulo
    const Users= datosTestimonio.resenias.usuarios;

    return (
        <Box backgroundColor={'black'}
         color={'white'} 
         w={'100%'}
         minW={{base:'300px', lg:'100vw'}}
         minH={{base:'600px', lg:'600px'}}>
                <Box margin={'5%'} >
                  <Stack spacing={0} align={'center'}>
                    <Heading>{titulo}</Heading>
                    <Text>{sub1}</Text>
                  </Stack>
                  <Stack
                    margin={'3%'}
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 12 }}
                    align={'center'}>
                    
                    {Users.map((e,i)=>{
                        return(
                            <div key={i}>
                            <Usuarios  text={e.texto} name={e.nombre} title={e.profesion} avatar={e.img} />
                            </div> 
                            ) 
                            })
                            }
                  </Stack>
                  <Flex flexDir={{base:'column', lg:'row'}}
                  justifyContent={'center'}
                  gap={'5%'}>
                      <Flex className='boton-escribe'
                      justifyContent={'center'}
                     >
                     {(idioma === 'esp')?
                      <Button border={'1px black solid'}>
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,3,,,,'} isExternal>Escribe un comentario</Link>
                      </Button> :
                      <Button>
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,3,,,,'} isExternal>Write a comment</Link></Button>
                     }
          
                      </Flex>
                      <Flex className='boton-ver-mas'
                      justifyContent={'center'}>
                      {(idioma === 'esp')?
                        <Button border={'1px black solid'}>
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,'} isExternal>
                              Todos los comentarios
                          </Link>
                        </Button> :
                        <Button>
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,'} isExternal>
                              All Comments
                          </Link>
                          </Button>
                      }
          
                      </Flex>
                  </Flex>
                </Box>
              </Box>
            )
}
