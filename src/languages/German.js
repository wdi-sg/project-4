import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Germanpic from '../images/German.png'
import Goethe from '../images/goethe.jpg'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export default class German extends Component {
  render () {
    return (
      <div className='container'>
        <Image src={Germanpic} responsive />
        <Row>
          <Col xs={12}>
            <br></br>
            <Row>
              <Col xs={3}>
                <div className="card">
                  <Image className="card-img-top" src={Goethe} responsive />
                  <Link to="/goethe"><span></span></Link>
                  <div className="card-body">
                    <h4 className="card-title">Goethe Institut</h4>
                    <p className="card-text">The Goethe-Institut is the Federal Republic of Germany’s cultural institute, active worldwide.</p>
                  </div>
                </div>
              </Col>
              <Col xs={3} />
              <Col xs={3} />
              <Col xs={3}>
              <Card>
              <CardMedia>
                <Image src={Goethe} />
              </CardMedia>
              <CardTitle title="Goethe Institut" subtitle="Card subtitle" />
              <CardText>
                The Goethe-Institut is the Federal Republic of Germany’s cultural institute, active worldwide.
              </CardText>
              </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
