import { Box, Stack, StackDivider,Text,  } from '@chakra-ui/react'
import * as React from 'react' 
import { LinkGrid } from './linkGrid'
import { Logo } from './logo'
import  SocialMediaLinks from './socialMediaLinks'
import { SubscribeForm } from './subscribeForm'

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '10',
          lg: '28',
        }}
      >
        <Box flex="1">
          <Logo />
        </Box>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '10',
            md: '20',
          }}
        >
          <LinkGrid
            spacing={{
              base: '10',
              md: '20',
              lg: '28',
            }}
            flex="1"
          />
          <SubscribeForm
            width={{
              base: 'full',
              md: 'sm',
            }}
          />
        </Stack>
      </Stack>
      <Stack
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
         <Text fontSize="sm" >
    &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
  </Text>

        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
)

export default Footer