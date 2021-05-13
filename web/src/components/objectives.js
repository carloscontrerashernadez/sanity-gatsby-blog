import { Box,  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import PortableText from "./portableText";

const MyAccordion = (props) => {
const titles=['Scenario overview:','How to be successful:','What you should know prior:','Scenario Instructions:']
 
  return (
    <Accordion >

<AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
               1-Objective
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Using ping, send an ICMP echo request to a system on the target network.
            </AccordionPanel>
          </AccordionItem>
   
<AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
               2-Objective
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Using ping, send an ICMP echo request to a system on the target network.
            </AccordionPanel>
          </AccordionItem>
          
<AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
               3-Objective
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Using ping, send an ICMP echo request to a system on the target network.
            </AccordionPanel>
          </AccordionItem>
          
<AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
               4-Objective
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Using ping, send an ICMP echo request to a system on the target network.
            </AccordionPanel>
          </AccordionItem>
          
<AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
               5-Objective
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Using ping, send an ICMP echo request to a system on the target network.
            </AccordionPanel>
          </AccordionItem>
  
  
  </Accordion>
  )
}


export default MyAccordion


