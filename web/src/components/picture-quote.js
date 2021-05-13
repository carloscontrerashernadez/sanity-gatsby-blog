import { Box, Center, Divider, Flex, Img, Stack } from '@chakra-ui/react'
import * as React from 'react'
 
 

const Quote = (props) => {

 
  return (
    <Box as="section" py="12">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <Flex align={{ lg: 'center' }} direction={{ base: 'column', md: 'row' }}>
          <Box
            flex="1"
            pos="relative"
            maxW={{ lg: '480px' }}
            as="button"
            aria-label="Play Testimonial video"
          >
            <Img
              w="full"
              h="full"
              objectFit="cover"
              alt="Testimonial"
              loading="lazy"
              rounded="4px"
              overflow="hidden"
              src={props.data.quote1Image.asset.url}
            />
         
          </Box>

          <Box
            flex="1"
            paddingStart={{ md: '16' }}
            paddingEnd={{ md: '12' }}
            mt={{ base: '8', md: '0' }}
          >
            <Stack
              align={{ base: 'flex-start', lg: 'center' }}
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: '2', lg: '4' }}
            >
              <Box as="h5" color="gray.500" fontSize="lg">
               {props.data.quotee1}
              </Box>
              
              
            </Stack>
            <Box mt="4" fontSize={{ base: 'xl', lg: '2xl' }} as="blockquote">
  &quot;{props.data.quote1}&quot;
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Quote