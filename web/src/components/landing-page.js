import React from "react";

import Layout from "../containers/layout";

import {
  ChakraProvider,
  Flex,
  SimpleGrid,
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
import{ Member} from '../components/member'
import { theme } from "../components/theme";
 
import Quote1 from '../components/picture-quote'
 import Blurb from '../components/case-study-blurb'
 import BannerQuote from '../components/banner-quote'
 import IconBlurbs from '../components/icon-blurbs'
 import SimpleBlurb from '../components/simple-blurb'
 import Quote3 from '../components/quote'
 import AresDivider from '../components/ares-banner' 
 import Hero from '../components/project-ares-hero'
 import ImageBlurb from '../components/image-blurb-cta'
 import Feed from '../components/feature-feed'

function Scenario(props) {
 
 

  return (
    <ChakraProvider theme={theme}>
      <Layout>
         <Hero data={props} />
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
        {props.speakers.map((member, idx) => (
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
      <ImageBlurb  data={props} />
      <Feed nodes={props.features}/>
      </Layout>
    </ChakraProvider>
  );
}

export default Scenario;
