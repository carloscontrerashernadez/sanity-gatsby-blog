import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";
import {
  Box,
  Button,
  Center,
  Heading,
  Img,
  Flex,
  LightMode,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { responsiveTitle3 } from "./typography.module.css";

function Blurb(props) {
 
  return (
    <Box as="section" py="12">
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
      <Text   m='0 0 1em 0' >
   {props.data.iconsTitle}
   </Text>
        <Flex
          align={{ lg: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          <Box flex="1" paddingStart={{ md: "16" }}
            paddingEnd={{ md: "12" }}
            mt={{ base: "8", md: "0" }}>
  <Center flexDirection="column" justify="center"   h="full">
<Img
              
              h="5em"
              mb='1em'
              objectFit="contain"
              alt="Testimonial"
              loading="lazy"
              
              overflow="hidden"
              src={props.data.icon1.asset.url}
            />

            <PortableText blocks={props.data._rawIconBlurb1} /></Center>
          </Box>
          <Box
            flex="1"
            paddingStart={{ md: "16" }}
            paddingEnd={{ md: "12" }}
            mt={{ base: "8", md: "0" }}
          >
                <Center flexDirection="column" justify="center"   h="full">
<Img
              
              h="5em"
              mb='1em'
              objectFit="contain"
              alt="Testimonial"
              loading="lazy"
              
              overflow="hidden"
              src={props.data.icon1.asset.url}
            />

            <PortableText blocks={props.data._rawIconBlurb2} /></Center>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Blurb;
