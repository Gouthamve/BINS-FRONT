import React from 'react'
import {connect} from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import styles from './playlist.scss'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { Header, TrackList } from './components'
import {actions as audioActions} from 'redux/modules/audio';

const mapStateToProps = (state) => {
  return {
    playlist: state.audio.playlists[0],
    current: state.audio.current,
    playing: state.audio.playing
  }
}


class Playlist extends React.Component {

  constructor(props) {
    super(props);
  }

  setPlaylist() {
    this.props.setPlaylist(this.props.playlist)
  }

  render() {
    return <Grid fluid className='text-center'>
      <Navbar />
      <Row className={styles.playlist}>
        <Col xs={1}>
            <Sidebar />
        </Col>
        <Col xs={11}>
          <Header onPlayNow={this.setPlaylist.bind(this)}/>
          <TrackList trackList={this.props.playlist} currentIdx={this.props.current.idx} playing={this.props.playing} setCurrentSong={this.props.setCurrent} playSong={this.props.playCurrent} setCurrentPlayList={this.props.setPlaylist} pauseCurrent={this.props.pauseCurrent}/>
        </Col>
      </Row>
    </Grid>
  }
}

export default connect(mapStateToProps, audioActions)(Playlist);
