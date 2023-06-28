import React from 'react';
import { Link } from "react-scroll";

const AppLink = (props) => {
  return (
    <Link
    
    to={props.linkTo ? props.linkTo : "/"}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={props.classes}
  >
    {props.caption}
  </Link>
  )
}

export default AppLink;