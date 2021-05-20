import { Box, Center, Divider, Heading, Text, Button, Flex, Img, Stack } from '@chakra-ui/react'
import * as React from 'react'
import Link from '../components/link'
 
 

const ImageBlurb = (props) => {

 
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
              src={'https://cdn.sanity.io/images/hvlc49kr/production/6b890fc3902645a75a82c95e18ae6c309c77bab3-1350x900.png'}
            />
         
          </Box>

          <Box
            flex="1"
            paddingStart={{ md: '16' }}
            paddingEnd={{ md: '12' }}
            mt={{ base: '8', md: '0' }}
          >
      <Heading as="h1" size="xl" fontWeight="extrabold"  >
            {props.data.title}
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
              maxW="lg"
            >
             {props.data.blurb}
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
            >
            {props.data.cta&&  <Button
                as="a"
                href="#"
                colorScheme="blue"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
               <Link to={props.data.ctaUrl} newTab={props.data.ctanewtab}> {props.data.cta}</Link>
              </Button>}
             
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default ImageBlurb