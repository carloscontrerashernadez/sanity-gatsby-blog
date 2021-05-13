import {
  Box,
  Stack,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import PortableText from "./portableText";

const Feature = (props) => {
 

  return (
    props.data.feature.link? <LinkBox>
      <Stack
        spacing={{
          base: "3",
          md: "6",
        }}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Box flex="1">
          <LinkOverlay href="#" isExternal={ props.data.feature.newTab?true:false}>
            <Image
              src={props.data.feature.image.asset.url}
              alt={props.data.feature.image.alt}
            />
          </LinkOverlay>
        </Box>
        <Stack spacing="1" flex="2">
          <Text fontWeight="extrabold" fontSize="lg">
            {props.data.feature.name}
          </Text>
          <Box color={mode("gray.600", "gray.400")}>
            {props.data.feature._rawBody && (
              <PortableText blocks={props.data.feature._rawBody} />
            )}
          </Box>
        </Stack>
      </Stack>
    </LinkBox>:
         <Stack
         spacing={{
           base: "3",
           md: "6",
         }}
         direction={{
           base: "column",
           md: "row",
         }}
       >
         <Box flex="1">
          
             <Image
               src={props.data.feature.image.asset.url}
               alt={props.data.feature.image.alt}
             />
          
         </Box>
         <Stack spacing="1" flex="2">
           <Text fontWeight="extrabold" fontSize="lg">
             {props.data.feature.name}
           </Text>
           <Box color={mode("gray.600", "gray.400")}>
             {props.data.feature._rawBody && (
               <PortableText blocks={props.data.feature._rawBody} />
             )}
           </Box>
         </Stack>
       </Stack>
  );
};

export default Feature;
