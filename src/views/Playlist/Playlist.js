import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import styles from './playlist.scss'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { Header, TrackList } from './components'

const Playlist = () => {
  return <Grid fluid className='text-center'>
    <Navbar />
    <Row className={styles.playlist}>
      <Col xs={1}>
          <Sidebar />
      </Col>
      <Col xs={11}>
        <Header />
        <TrackList />
      </Col>
    </Row>
  </Grid>
}

export default Playlist;
