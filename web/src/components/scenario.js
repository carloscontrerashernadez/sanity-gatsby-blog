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
import GraphQLErrorList from "../components/graphql-error-list";
import Accordion from "../components/accordion";
import Drawer from "../components/drawer";
import Objectives from "../components/objectives";

function MyTable(props) {
  return (
    <Table variant="simple">
      <Tbody>
        <Tr>
          <Td>Load Time</Td>
          <Td>{props.load}</Td>
        </Tr>
        <Tr>
          <Td>Time Limit</Td>
          <Td>{props.limit}</Td>
        </Tr>
        <Tr>
          <Td># of Tasks</Td>
          <Td>{props.tasks}</Td>
        </Tr>
        <Tr>
          <Td>Hints</Td>
          <Td>{props.hints ? "yes" : "no"}</Td>
        </Tr>
        <Tr>
          <Td>Save Session</Td>
          <Td>{props.save ? "yes" : "no"}</Td>
        </Tr>
        <Tr>
          <Td>Team Based</Td>
          <Td>{props.team ? "yes" : "no"}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

function Scenario(props) {
  const {
    title,
    load,
    limit,
    tasks,
    hints,
    save,
    team,
    mainImage,
    _rawOverview,
    _rawSuccess,
    _rawPrior,
    _rawInstructions,
  } = props;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Flex   align="stretch"  wrap='wrap' minH='100vh' >
          <Flex
            w="min(400px,100%)"
            bg="brand.1"
            align="center"
            direction="column"
            padding='1em 1em 2em'
           
          >
            <Image src={mainImage.asset.url} alt="badge" height="7em" m="1em" />
            <MyTable
              load={load}
              limit={limit}
              tasks={tasks}
              hints={hints}
              save={save}
              team={team}
            />
          </Flex>
          <Box  padding='1em'  flex='1'>
            <Flex align="center">
              <Heading as="h1" size="4xl" m=".5em">
                {title}
              </Heading>{" "}
              <Drawer scenarios={props.scenarios} />
            </Flex>

            <Flex justify="center">
<Box  w="min(75ch,100%)">
            <Accordion
              data={[_rawOverview, _rawSuccess, _rawPrior, _rawInstructions]}
            />

</Box>  </Flex>
          </Box>
          <Box  padding='1em' flex='1'bg="brand.1" >
            <Heading as="h2" size="2xl"  m="1em">
              Objectives
            </Heading>
            <Flex justify="center">
            <Box  w="min(75ch,100%)">
            <Objectives />
            </Box></Flex>
          </Box>
        </Flex>
        <Flex align="center" justify="center" m="2em 0"></Flex>
      </Layout>
    </ChakraProvider>
  );
}

export default Scenario;
