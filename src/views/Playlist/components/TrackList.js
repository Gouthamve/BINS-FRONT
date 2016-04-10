import React from 'react'
import { ListGroup } from 'react-bootstrap'

import Track from './Track'

const TrackList = ({setCurrentPlayList, playing, currentIdx, trackList, setCurrentSong, playSong, pauseCurrent}) => {
  let tracks = [];
  for(let i = 0; i < trackList.length; i++) {
    let setCurrent = () => {
      let curr = trackList[i];
      curr.idx = i;
      setCurrentPlayList(trackList);
      setCurrentSong(curr);
      playSong();
    }

    let playingy = false;
    if (playing && i === currentIdx) {
      playingy = true;
    }

    tracks.push(<Track {...trackList[i]} playing={playingy} key={i} setCurrent={setCurrent} pauseCurrent={pauseCurrent}/>)
  }

  return <ListGroup>
    {tracks}
  </ListGroup>
}

export default TrackList
