import { Box, SimpleGrid, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
import  Feature  from './feature'

const FeatureGroup = (props) => (
  <Box
    as="section"
    maxW="5xl"
    mx="auto"
    py="12"
    px={{
      base: '6',
      md: '8',
    }}
  >

<Heading as="h2" size="xl" fontWeight="extrabold" mb='1em' >
           {props.data.title}
            </Heading>
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacingX="10"
      spacingY={{
        base: '8',
        md: '14',
      }}
    >


{
      props.data.features.map((feature, index) => {
    
        return (
            <Feature key={index} data={feature}  />
        );
      })
}
       
    </SimpleGrid>
  </Box>
)


export default FeatureGroup