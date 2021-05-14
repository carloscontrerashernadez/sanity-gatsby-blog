import * as React from 'react'
import { graphql } from "gatsby";
import {
    Button,Box,
    Input,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    useDisclosure
  } from "@chakra-ui/react"

  import { ChevronDownIcon } from '@chakra-ui/icons'
  import GraphQLErrorList from "../components/graphql-error-list";
  import { NavLink } from './navlink' 
  import { Link } from "gatsby"
  import Layout from "../containers/layout";


 



  const MyDrawer = (props) => {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    console.log('drawer',props.scenarios.edges)

    return (
      <>
        <IconButton ref={btnRef}  onClick={onOpen} m="1em"   aria-label="Search Scenarios"  icon={<ChevronDownIcon />} />
         
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Scenarios</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder="Type here..." />


              {props.scenarios.edges
              .sort((a,b)=>a.slug<b.slug?1:-1)
              .map((scenario, index) => (
      
          <Box m='.5em 0' key='index'> <Link to={'/scenarios/'+scenario.node.slug.current}> <NavLink isActive={url=='/scenarios/'+scenario.node.slug.current}> {scenario.node.title}</NavLink></Link> 
          </Box>
          
       
          
              ))}


            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MyDrawer