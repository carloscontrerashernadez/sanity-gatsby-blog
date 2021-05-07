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
  
  const Blog = (props) => {
    const { title, href, description, media, author, category } = props
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
          <Img height="60" objectFit="cover" alt={title} src={media} />
          <Flex
            direction="column"
            px={{
              sm: '6',
            }}
            py="5"
          >
 <Flex direction="row"   >
{category &&
          category.map((category) => (
         <>   <Badge
            
          >
            {category.title}
          </Badge> <Spacer /></>
          ))}

</Flex>
           
            <Heading as="h3" size="sm" mb="2" lineHeight="base">
              <LinkOverlay href={href}>{title}</LinkOverlay>
            </Heading>
            <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
              {description}
            </Text>
            <Flex
              align="baseline"
              justify="space-between"
              fontSize="sm"
              color={mode('gray.600', 'gray.400')}
            >

{console.log(props)}

              <Text>
                By{' '}
                <Box as="a" textDecor="underline" >
                  {author}
                </Box>
              </Text>
              <Link href="#">
                <Box as={BsClockFill} display="inline-block" me="2" opacity={0.4} />3 min read
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </LinkBox>
    )
  }
  
const Feed = (props) => {
    return (
      <Box
        as="section"
        bg={mode('gray.50', 'gray.800')}
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
          <Heading size="xl" mb="8" fontWeight="extrabold">
            Featured Articles
          </Heading>
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing="12"
            mb="10"
          > 
          {console.log(props.nodes)}
{props.nodes &&
          props.nodes.map((node) => (
            <Blog
            category={node.categories}
            media={node.mainImage.asset.url}
            title={node.title}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            href={getBlogUrl(node.publishedAt, node.slug.current)}
            author={node.authors[0].author.name}
          />
          ))}
            
          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color={mode('blue.600', 'blue.400')}>
            <span>View all articles</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
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