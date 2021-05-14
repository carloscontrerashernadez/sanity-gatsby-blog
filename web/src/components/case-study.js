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
 import BannerQuote from '../components/banner-quote'
 import IconBlurbs from '../components/icon-blurbs'
 import SimpleBlurb from '../components/simple-blurb'
 import Quote3 from '../components/quote'
 import AresDivider from '../components/ares-banner'
 import Feed from '../components/index-blog-feed'

function Scenario(props) {
 
 

  return (
    <ChakraProvider theme={theme}>
      <Layout>
          <Hero data={props}/>
          <Quote1  data={props} />
       {props._rawSituation&&<Blurb  situation={props._rawSituation}/>}
       {props._rawSolution&&<Blurb  solution={props._rawSolution}/>}
       <BannerQuote data={props}/>
       <IconBlurbs  data={props}/>
       <SimpleBlurb  blurb={props._rawBlurb1}/>
       <Quote3 data={props}/>
       {props._rawBenefits&&<Blurb  benefits={props._rawBenefits} image={props.benefitsImage}/>}
      
     <AresDivider data={props}/>
       <SimpleBlurb  blurb={props._rawBlurb2}/>
       <Feed nodes={props.related}/>
      </Layout>
    </ChakraProvider>
  );
}

export default Scenario;
