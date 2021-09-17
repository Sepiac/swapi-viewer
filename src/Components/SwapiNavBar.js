import React, { useState } from 'react'
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const SwapiNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">SWAPI Viewer</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar style={{textAlign: 'left'}}>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/Sepiac/swapi-viewer" target="_blank" >GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default SwapiNavBar;