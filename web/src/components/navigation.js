import { Box, Center,useColorMode, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { Navbar } from './navbar'
import { NavLink } from './navlink'
import { UserProfile } from './userProfile'
import { Link } from "gatsby"
import {
    Button
  } from '@chakra-ui/react'


const Navigation = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    
    
    return (

    
  <Box   bg={mode('gray.50', 'gray.700')}>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd="10">
          <Logo h="6" iconColor={mode('blue.600', 'blue.300')} />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
      <Link to='/'> <NavLink isActive>Start</NavLink></Link> 
       <Link to='/blog'> <NavLink >Blog</NavLink></Link>
       <Link to='/about-us'> <NavLink >About Us</NavLink></Link>
       <Button onClick={toggleColorMode} >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      </Navbar.Links>
     
    </Navbar>
  </Box>
)}


export default Navigation