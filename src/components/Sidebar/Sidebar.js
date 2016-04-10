import React from 'react'
import { Image, ListGroup, ListGroupItem } from 'react-bootstrap'

import dp from 'img/dp.jpg';

const Sidebar = () => {
  return <div>
    <Image src={dp} responsive />
    <ListGroup>
      <ListGroupItem href='/dashboard'><i className='fa fa-home fa-3x'></i></ListGroupItem>
      <ListGroupItem href="/playlist"><i className='fa fa-list fa-3x'></i></ListGroupItem>
      <ListGroupItem><i className='fa fa-eye fa-3x'></i></ListGroupItem>
    </ListGroup>
  </div>
}

export default Sidebar;
