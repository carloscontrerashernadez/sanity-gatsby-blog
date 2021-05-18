import { Box, Heading, Text,  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import PortableText from "./portableText";

const MyAccordion = (props) => {
 
 
  return (
    <Accordion >
{props.data
  .filter((objective) => objective.sanityId.includes(props.scenario.toUpperCase()))
  .map((objective, index) => {
           
            return (
              <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                {objective.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>






              <AccordionPanel pb={4}>


              <Heading   size="sm" fontWeight="extrabold"  >
              {objective.description}
      </Heading>
      {objective._rawBody && <PortableText blocks={objective._rawBody} />}
             
              </AccordionPanel>
            </AccordionItem>
            );
          })}
 
  
  
  </Accordion>
  )
}


export default MyAccordion


