import React from 'react'
import { ListGroupItem, Row, Col, Image } from 'react-bootstrap'

import alart from 'img/coverart1.jpg'

const Track = () => {
  return <ListGroupItem>
    <Row className='vertical-align'>
      <Col xs={1}>
        <i className={`fa fa-play-circle-o fa-2x`}></i>
      </Col>
      <Col xs={1}>
        <Image src={alart} responsive />
      </Col>
      <Col xs={4} className='text-left'>
        <p>A Head full of dreams</p>
      </Col>
      <Col xs={1} className='text-left'>
        <p>4:60</p>
      </Col>
      <Col xs={2} className='text-left'>
        <p>Coldplay</p>
      </Col>
      <Col xs={1} className='text-left'>
        <p>Alternate</p>
      </Col>
      <Col xs={1} className='text-right'>
        <p>2001</p>
      </Col>
    </Row>
  </ListGroupItem>
}

export default Track
