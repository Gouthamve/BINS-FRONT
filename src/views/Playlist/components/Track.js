import React from 'react'
import { ListGroupItem, Row, Col, Image, Button } from 'react-bootstrap'

import alart from 'img/coverart1.jpg'

const Track = ({ name, album, artist, playing, setCurrent, pauseCurrent}) => {
  let playButton = <Button onClick={setCurrent}><i className={`fa fa-play-circle-o fa-2x`}></i></Button>
  if (playing) {
    playButton = <Button onClick={pauseCurrent}><i className={`fa fa-pause-circle-o fa-2x`}></i></Button>
  }

  return <ListGroupItem>
    <Row className='vertical-align'>
      <Col xs={1}>
        {playButton}
      </Col>
      <Col xs={1}>
        <Image src={alart} responsive />
      </Col>
      <Col xs={4} className='text-left'>
        <p>{name}</p>
      </Col>
      <Col xs={1} className='text-left'>
        <p>4:60</p>
      </Col>
      <Col xs={2} className='text-left'>
        <p>{artist}</p>
      </Col>
      <Col xs={1} className='text-left'>
        <p>Alternate</p>
      </Col>
      <Col xs={1} className='text-right'>
        <p>2016</p>
      </Col>
    </Row>
  </ListGroupItem>
}

export default Track
