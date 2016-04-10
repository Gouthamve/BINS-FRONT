import React, { PropTypes } from 'react'
import { Grid,Row,Col } from 'react-bootstrap';

import styles from './dashboard.scss'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Trending from 'components/Trending'
import Tracks from 'components/Tracks'

export class Dashboard extends React.Component {

  render () {
    return (
      <Grid fluid className='text-center'>
        <Navbar />
        <Row className={styles.dashboard}>
          <Col xs={1}>
              <Sidebar />
          </Col>
          <Col xs={11}>
            <div className="container-fluid">
              <Row>
                <Col xs={12} md={8}>
                  <Trending />
                </Col>
              </Row>
            </div>
            <div className="container-fluid">
              <Row>
                <Col xs={12}>
                <h1>HOT TRACKS</h1>
                  <Tracks />
                </Col>
              </Row>
            </div>
            <div className="container-fluid">
              <Row>
                <Col xs={12}>
                <h1>TOP PLAYLISTS</h1>
                  <Tracks />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Dashboard
