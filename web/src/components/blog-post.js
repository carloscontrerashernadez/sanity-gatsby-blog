import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlogHero from './blog-hero'
import BlogBody from './blog-body'
import { ChakraProvider } from "@chakra-ui/react"
import { Flex, Box } from '@chakra-ui/react'

import {theme} from './theme'
import Layout from './layout'

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
  } = props;
  return (
    <ChakraProvider theme={theme}>
     <Layout>
      <BlogHero title={title} mainImage={mainImage}/>

      <Flex justify='center'>
<Box maxW="960px" mt='2em'>
      {_rawBody && <PortableText blocks={_rawBody} />}

      {authors && <AuthorList items={authors} title="Authors" />}
      <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>

      </Box>
      </Flex>


 
   
 
   </Layout>

    </ChakraProvider>
  );
}

export default BlogPost;
