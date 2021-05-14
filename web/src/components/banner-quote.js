import { Box, Button, Center, Heading, Img,LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import Social from './socialMediaLinks'
import { format } from "date-fns";
export const Hero = (props) => {

 
 const image='url('+props.data.quote2Image.asset.url+')'
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h='340px'
      bgImage={image}
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: 'block',
        w: 'full',
        h: 'full',
        bg: 'blackAlpha.700',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
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

        <Img
              
              h="5em"
              mb='1em'
              objectFit="contain"
              alt="Testimonial"
              loading="lazy"
              
              overflow="hidden"
              src={props.data.quote2Logo.asset.url}
            />

          <Heading size="lg" color='white' >
          &quot;{props.data.quote2}&quot; &nbsp;- &nbsp;{props.data.quotee2}
          </Heading>
       
         
      
        </Center>
      </Box>
 
    </Box>
  )
}


export default Hero