import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Germanpic from '../images/German.png'
import Goethe from '../images/goethe.png'
import Inlingua from '../images/inlingua.svg'
import { school } from '../schools/schoolinfo'
import { lang } from './langinfo'

export default class German extends Component {
  render () {
    return (
      <div className='container'>
        <Image src={Germanpic} responsive />
        <Row>
          <Col xs={12} md={12}>
            <Row>
              <Col xs={0} md={3} />
              <Col xs={12} md={6}>
                <h2>German</h2>
                <p>Countries spoken: {lang.german.country}</p>
                <p>Speakers worldwide: {lang.german.speakers}</p>
                <p>What makes it easy to learn: {lang.german.easy}</p>
                <p>What makes it difficult to learn: {lang.german.hard}</p>
                <p>Why learn it?: {lang.german.why}</p>
              </Col>
              <Col xs={0} md={3} />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <br />
            <Row>
              <div className="card-deck">
                <Col xs={6} md={3}>
                  <div className="card">
                    <Image className="card-img-top" src={Goethe} alt ='Goethe logo' responsive />
                    <Link to="/goethe"><span></span></Link>
                    <div className="card-body">
                      <h4 className="card-title">{school.goethe.name}</h4>
                      <p className="card-text">{school.goethe.description}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="card">
                    <Image className="card-img-top" src={Inlingua} alt='Inlingua logo' responsive />
                    <Link to="/inlingua"><span></span></Link>
                    <div className="card-body">
                      <h4 className="card-title">{school.inlingua.name}</h4>
                      <p className="card-text">{school.inlingua.description}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={3} />
                <Col xs={3} />
              </div>
            </Row>
            <br />
          </Col>
        </Row>
      </div>
    )
  }
}
