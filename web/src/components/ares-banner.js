import { Box, Button, Center, Heading, Img,LightMode, SimpleGrid, Text, useColorModeValue as mode  } from '@chakra-ui/react'
import * as React from 'react'
import Social from './socialMediaLinks'
import { format } from "date-fns";
import Logo from '../components/logo'

export const Hero = (props) => {

 
 const image='url(https://cdn.sanity.io/images/hvlc49kr/production/cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900.png?w=1350&h=900&auto=format)'
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h='240px'
      
    >
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center flexDirection="column" textAlign="center"   h="full">

        <Logo h="9" iconColor={mode('blue.600', 'blue.300')} />

        
         
      
        </Center>
      </Box>
 
    </Box>
  )
}


export default Hero