import * as React from 'react'
import { Link as GatsbyLink } from "gatsby"
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = (props) => {
 
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(props.to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
      
    return (
      <GatsbyLink
        to={props.to}
        activeClassName={props.activeClassName}
        partiallyActive={props.partiallyActive}
      
      >
        {props.children}
      </GatsbyLink>
    )
  }
  return (
      
    <a href={props.to} target={props.newTab?"_blank":''} >
        
      {props.children}
    </a>
  )
}
export default Link