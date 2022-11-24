import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
} from "reactstrap";
// import [FcAbout] from "react-icons/fc"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(!isOpen)}

  return (
    <Navbar expand="md" className="fixed-top ">
      <NavbarBrand className="">
        <img alt="" className=" avatar" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        {" "}
        {/* <span className="sr-only">Toggler</span>{" "}
        <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "} */}
        <Nav href="#" navbar className="mx-auto nav">
          <NavItem>
            <NavLink active href="#about" className="navLink-style">
              About Me 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#stack" className="navLink-style">
              My Stack
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects" className="navLink-style">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" className="page-scroll navLink-style">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
