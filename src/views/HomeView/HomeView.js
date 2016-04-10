import React, { PropTypes } from 'react'

import { Grid,Row,Col } from 'react-bootstrap';

import Navbar from 'components/Navbar'
import Trending from 'components/Trending'
import SignUpForm from 'components/SignUpForm'
import Tracks from 'components/Tracks'


export class HomeView extends React.Component {

  render () {
    return (
      <div className='container-fluid text-center'>
        <Navbar />
        <br />
        <br />
        <br />
        <h1>Welcome to BINS</h1>
        <div className="container-fluid">
          <Row>
            <Col xs={12} md={8}>
              <Trending />
            </Col>
            <Col xs={12} md={4}>
              <SignUpForm />
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
      </div>
    )
  }
}
export default HomeView
