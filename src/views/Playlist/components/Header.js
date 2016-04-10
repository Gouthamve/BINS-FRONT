import React from 'react'
import { Jumbotron, Button, Image, Grid, Row, Col } from 'react-bootstrap'

import alart from 'img/coverart1.jpg'

const Header = () => {
  return <Jumbotron>
    <Grid fluid>
      <Row>
        <Col xs={2}>
          <Image src={alart} responsive />
        </Col>
        <Col xs={10}>
          <Row>
            <Col xs={12}>
              This is the playlist description. I like Coldplay and I am currently am obsessed with 1989.
              I know none of you give a fuck, but there needs to be something here.
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs={12}>
              <Button primary>Play Now</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Jumbotron>
}

export default Header
