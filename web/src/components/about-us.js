import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './member'
 

const About = (props) => {
  console.log('about',props)
  return(
  <Box as="section">
    <Box
      mx="auto"
      maxW={{
        base: 'xl',
        md: '7xl',
      }}
      px={{
        base: '6',
        md: '8',
      }}
      py={{
        base: '12',
        md: '20',
      }}
    >
      <Box textAlign="center">
        <Heading size="3xl" letterSpacing="tight" mb="5" fontWeight="extrabold">
         {props.data.title}
        </Heading>
        <Text fontSize="xl" maxW="2xl" mx="auto">
         {props.data.blurb}
        </Text>
      </Box>
      <SimpleGrid
        mt="20"
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacingX="6"
        spacingY="16"
      >
        {props.data.team.map((member, idx) => (
          <Member
            key={idx}
            role={member.title}
            image={member.image.asset.url}
            name={member.name}
            twitter={member.link1}
            linkedIn={member.link2}
          >
            {member.blurb}
          </Member>
        ))}
      </SimpleGrid>
    </Box>
  </Box>
)}

export default About