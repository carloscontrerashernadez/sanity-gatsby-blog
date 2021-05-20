import { Box, Button, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import Link from './link'
const Cta = (props) => (
  <Box as="section">
    <Box
      maxW="2xl"
      mx="auto"
      px={{
        base: '6',
        lg: '8',
      }}
      py={{
        base: '16',
        sm: '20',
      }}
      textAlign="center"
    >
    {props.title&&   <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
      {props.title}
      </Heading>}
      {props.subtitle&& <Text mt="4" fontSize="lg">
      {props.subtitle}
      </Text>}

      {props.blurb&& <Text >
      {props.blurb}
      </Text>}


      {props.cta&& <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
     <Link to={props.ctaUrl} newTab={props.newTab}>  {props.cta}</Link>
      </Button>}
    </Box>
  </Box>
)

export default Cta