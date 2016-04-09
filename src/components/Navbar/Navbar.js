import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Player from 'components/Player'

const NavbarInstance = () => {
  return <Navbar fluid fixedTop inverse className='vertical-align'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">BINS</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Player />
  </Navbar>
}

export default NavbarInstance;
