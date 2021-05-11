import { Box, Stack, Text,Image, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import PortableText from './portableText'

const Feature = (props) => {
  const { title, children, icon } = props
  return (
    <Stack
      spacing={{
        base: '3',
        md: '6',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      <Box flex='1' >

      <Image   src={props.image} alt="Segun Adebayo" />

      </Box>
      <Stack spacing="1"  flex='2'>
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')}>
            {props.text && <PortableText blocks={props.text} />} 
            {/*children*/} 
            
            </Box>
      </Stack>
    </Stack>
  )
}


export default Feature