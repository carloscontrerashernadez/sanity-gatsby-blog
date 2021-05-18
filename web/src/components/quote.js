import { Box, Button, Center, Heading, Img,LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import Social from './socialMediaLinks'
import { format } from "date-fns";
export const Hero = (props) => {

 
 const image='url(https://cdn.sanity.io/images/hvlc49kr/production/6b890fc3902645a75a82c95e18ae6c309c77bab3-1350x900.png)'
 

  return (
    <Box
      as="section"
    
      py="12"
      position="relative"
      h='340px'
      borderTopWidth='2px'
      borderBottomWidth='2px'
      
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
 

          <Heading size="md" >
          &quot;{props.data.quote3}&quot; &nbsp;- &nbsp;
        {props.data.quotee3}
          </Heading>
       
         
      
        </Center>
      </Box>
 
    </Box>
  )
}


export default Hero