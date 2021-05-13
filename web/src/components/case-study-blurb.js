import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";
import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import { responsiveTitle3 } from "./typography.module.css";

function Blurb(props) {
    console.log('blurb',props)
  return (
    <Box as="section" py="12">
    <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
    {props.situation&&  <Heading size="xl" fontWeight="extrabold" m='0 0 1em 0' >
    The Situation
   </Heading>}
    <PortableText blocks={props.situation} /></Box></Box>
  );
}

export default Blurb;
