import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";
import { Box, Button, Center, Heading,Img,Flex,Icon, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import { responsiveTitle3 } from "./typography.module.css";
import IconSituation from './icon-situation'
import IconSolution from './icon-situation'
import IconBenefits from './icon-situation'

function Blurb(props) {
    
  return (
    <Box as="section" py="12">
    <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
    {props.situation&&  <><Heading size="xl" fontWeight="extrabold" m='0 0 1em 0' >
    <IconSituation w={16} h={16} />  The Situation
   </Heading>
    <PortableText blocks={props.situation} /></>
   
   }
  {props.solution&&  <><Heading size="xl" fontWeight="extrabold" m='0 0 1em 0' >
   <IconSolution  w={16} h={16}/> The Solution
   </Heading>
    <PortableText blocks={props.solution} /></>
   
   }

{props.benefits&&  <><Heading size="xl" fontWeight="extrabold" m='0 0 1em 0' >
   <IconBenefits  w={16} h={16}/> The Benefits
   </Heading>
   <Flex align={{ lg: 'center' }} direction={{ base: 'column', md: 'row' }}>
   <Box
            flex="1"
            pos="relative"
            maxW={{ lg: '480px' }}
           
            
          >
   <Img
              w="full"
              h="full"
              maxH='50vh'
              objectFit="contain"
              alt="Testimonial"
              loading="lazy"
              rounded="4px"
              overflow="hidden"
              src={props.image.asset.url}
            /></Box>
                    <Box
            flex="1"
            paddingStart={{ md: '16' }}
            paddingEnd={{ md: '12' }}
            mt={{ base: '8', md: '0' }}
          >
    <PortableText blocks={props.benefits} /></Box></Flex></>
   
   }


   </Box></Box>
  );
}

export default Blurb;
