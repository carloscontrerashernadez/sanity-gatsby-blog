import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'

import { differenceInDays, formatDistance, format } from "date-fns";
import * as React from 'react'

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
 


export const BlogHero = (props) => {
    
 const bg='url('+imageUrlFor(buildImageObj(props.mainImage))
 .width(1200)
 .height(Math.floor((9 / 16) * 1200))
 .fit("crop")
 .auto("format")
 .url()+')'
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h={{ base: '560px', md: '640px' }}
     
      bgImage={bg}
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
          <Heading size="2xl" fontWeight="extrabold">
           {props.title}
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3">
    {props.publishedAt}
          </Text>
          
        </Center>
      </Box>
 
    </Box>
  )
}

export default BlogHero