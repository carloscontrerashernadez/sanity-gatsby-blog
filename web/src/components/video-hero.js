import {
    Box,
    Button,
    Center,
    Grid,
    Img,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { BiRightArrowAlt } from 'react-icons/bi'
  import { FaPlayCircle } from 'react-icons/fa'
  import { SampleLogo } from './logo'
 import Link from './link'
 
  
 const VideoHero = (props) => { 
 
   const url=`https://player.vimeo.com/video/${props.data.videoUrl.split('/')[props.data.videoUrl.split('/').length-1]}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`
    return (
      <Box as="section" py="24" bg={mode('gray.100', 'gray.800')}>
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
        >
          <Grid
            templateColumns={{
              base: '1fr',
              md: '360px 1fr',
            }}
            gap="64px"
          >
            <Box>
              <Heading size="3xl" letterSpacing="tight" fontWeight="extrabold">
               {props.data.title}
              </Heading>
              <Text mt="6" mb="8" fontSize="lg" fontWeight="medium">
               {props.data.subtitle}
              </Text>
              <Button size="lg" colorScheme="blue" minH="14" rightIcon={<BiRightArrowAlt />}>
           <Link to={props.data.ctaUrl} newTab={props.data.newTab}> {props.data.cta} </Link>  
              </Button>
            
                       </Box>
            <Box>
              <Center
                bg={mode('white', 'gray.700')}
                pos='relative'
                shadow="lg"
            paddingTop='calc((9 / 16) * 100%)'
                rounded="lg"
              >
 <iframe src={url}  style={{position:"absolute",top:"0",left:'0',width:"100%",height:"100%"}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Project Ares Trailer - Short Ver."></iframe>
 
              </Center>
         
            </Box>
          </Grid>
        </Box>
      </Box>
    )
  }


  export default VideoHero