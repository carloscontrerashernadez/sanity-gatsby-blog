import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import Social from './socialMediaLinks'
import { format } from "date-fns";
export const Hero = (props) => {

  const image='url('+props.data.heroImage.asset.url+')'
 
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h={{ base: '560px', md: '640px' }}
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
        <Center flexDirection="column" textAlign="center" color="white" h="full">
          <Heading size="2xl" fontWeight="extrabold" color='white'>
           {props.data.title}
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3">
          {format(new Date(props.data.publishedAt), "MMMM Mo, yyyy")}
            
          </Text>
          <Social/>
      
        </Center>
      </Box>
 
    </Box>
  )
}


export default Hero