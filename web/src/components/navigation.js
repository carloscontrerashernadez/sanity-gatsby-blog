import { Box, Center,useColorMode, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import Logo from './logo'
import { Navbar } from './navbar'
import { NavLink } from './navlink'
import { UserProfile } from './userProfile'
import { Link } from "gatsby"
import {
    Button
  } from '@chakra-ui/react'


const Navigation = () => {
    
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
    
    return (

    
  <Box   bg={mode('gray.50', 'gray.700')} pos='relative' zIndex='1' >
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd="10">
        <Logo h="6" iconColor={mode('blue.600', 'blue.300')} />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
      <Link to='/'> <NavLink isActive={url=='/'}>Start</NavLink></Link> 
       <Link to='/blog'> <NavLink  isActive={url=='/blog'} >Blog</NavLink></Link>
       <Link to='/about-us'> <NavLink isActive={url=='/about-us'} >About Us</NavLink></Link>
       <Link to='/project-ares'> <NavLink isActive={url=='/project-ares'} >Project Ares</NavLink></Link>
       <Link to='/scenarios/br1'> <NavLink isActive={url=='/scenarios/br1'} >Scenario</NavLink></Link>
       <Link to='/case-study/capella'> <NavLink isActive={url=='/case-study/capella'} >Case Study</NavLink></Link>
    
      </Navbar.Links>
      <Navbar.UserProfile>
        <UserProfile
          name="Christian Schröter"
          avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512"
          email="mail@chidori-ui.com"
        />
      </Navbar.UserProfile>
     
    </Navbar>
  </Box>
)}


export default Navigation