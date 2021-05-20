import { Box, Button, Flex, Grid,Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { Link } from 'gatsby'
import Form from './act-on-form'

const ProjectAresHero = (props) => {
 
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          color="white"
        >
          
          <Grid
            templateColumns={{
              base: '1fr',
              md: '1fr 1fr',
            }}
            gap="64px"
          >

          <Box >
            <Heading as="h1" size="3xl" fontWeight="extrabold" color="white">
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
               <Link>{props.data.cta}</Link>
              </Button>}
             
            </Stack>
          </Box>
          <Box  bg='brand.2'>
            <Heading as="h1" size="xl" fontWeight="extrabold" color="white">
         <Form id={props.data.formId}/>
            </Heading>
          
      
          </Box></Grid>
          
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={props.data.heroImage.asset.url}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}


export default ProjectAresHero