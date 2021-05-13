import React from "react";

import Layout from "../containers/layout";

import {
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Table,
  Box,
  Thead,
  Divider,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { theme } from "../components/theme";
 
import Hero from '../components/case-study-hero'
import Quote1 from '../components/picture-quote'
 import Blurb from '../components/case-study-blurb'

function Scenario(props) {
 
console.log('case',props)

  return (
    <ChakraProvider theme={theme}>
      <Layout>
          <Hero data={props}/>
          <Quote1  data={props} />
       {props._rawSituation&&<Blurb  situation={props._rawSituation}/>}
      </Layout>
    </ChakraProvider>
  );
}

export default Scenario;
