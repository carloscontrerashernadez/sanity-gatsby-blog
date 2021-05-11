import { Box, Button, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'

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
      <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
      {props.data.ctaTitle}
      </Heading>
      <Text mt="4" fontSize="lg">
      {props.data.ctaSubtitle}
      </Text>
      <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
       {props.data.cta3}
      </Button>
    </Box>
  </Box>
)

export default Cta