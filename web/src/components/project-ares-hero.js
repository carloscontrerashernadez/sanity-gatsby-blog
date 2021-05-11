import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'

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
          <Box maxW="xl">
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
             {props.data.subtitle}
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
            >
              <Button
                as="a"
                href="#"
                colorScheme="blue"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
               {props.data.cta}
              </Button>
              <HStack
                as="a"
                transition="background 0.2s"
                justify={{
                  base: 'center',
                  md: 'flex-start',
                }}
                href="#"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{
                  bg: 'whiteAlpha.300',
                }}
              >
                <span>    {props.data.cta2}</span>
                <HiChevronRight />
              </HStack>
            </Stack>
          </Box>
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
            src={props.data.mainImage.asset.url}
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