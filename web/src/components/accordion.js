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

{
         props.data.map((content,index) => (
            <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                 {titles[index]}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
             <PortableText blocks={content}/>
            </AccordionPanel>
          </AccordionItem>
          ))}
   
  
  
  </Accordion>
  )
}


export default MyAccordion


