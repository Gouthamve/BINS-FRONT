import React from 'react'
import { ListGroup } from 'react-bootstrap'

import Track from './Track'

const TrackList = () => {
  let tracks = [];
  for(let i = 0; i < 15; i++) {
    tracks.push(<Track />)
  }

  return <ListGroup>
    {tracks}
  </ListGroup>
}

export default TrackList
