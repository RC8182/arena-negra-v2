import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const Logo = (props) => {
    const width= props.width
  return (
    <Flex
    margin={'5%'}  
    width={width}
    alignSelf={'center'}>
    <Image
        src={require("../../public/images/logoArena.jpg")}
        alt="Picture of the author"
        // width="100%" height="100%" layout="responsive" objectFit="contain"
        />
</Flex>
  )
}
