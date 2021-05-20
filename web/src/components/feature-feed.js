import {
    Box,
    Badge,
    Flex,
    Heading,
    Img,
    Link,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    Spacer,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'

  import {getBlogUrl } from "../lib/helpers";
  import * as React from 'react'
  import { BsArrowRight, BsClockFill } from 'react-icons/bs'
  
  const Card = (props) => {
      
  
    return (
      <LinkBox
        as="article"
        bg={{
          sm: mode('white', 'gray.700'),
        }}
        shadow={{
          sm: 'base',
        }}
        rounded={{
          sm: 'md',
        }}
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          shadow: {
            sm: 'lg',
          },
        }}
      >
        <Flex direction="column">
          <Img height="60" objectFit="cover" alt={props.title} src={props.media} />
          <Flex
            direction="column"
            px={{
              sm: '6',
            }}
            py="5"
          >
 
           
            <Heading as="h3" size="sm" mb="2" lineHeight="base">
              <LinkOverlay href={props.link} isExternal={props.newTab}>{props.title}</LinkOverlay>
            </Heading>
            <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
              {props.description}
            </Text>
           
          </Flex>
        </Flex>
      </LinkBox>
    )
  }
  
const Feed = (props) => {
 
    return (
      <Box
        as="section"
      
        py={{
          base: '10',
          sm: '24',
        }}
      >
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
          
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing="12"
            mb="10"
          > 
        
{props.nodes &&
          props.nodes.map((node,index) =>{
           
            return(
            <Card key={index}
            link={node.feature.link}
            newTab={node.feature.newTab}
            media={node.feature.image.asset.url}
            title={node.feature.name}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            
            
          />
          )})}
            
          </SimpleGrid>
         
        </Box>
      </Box>
    )
  }
Feed.defaultProps = {
    title: "",
    nodes: [],
    browseMoreHref: "",
  };


  export default Feed