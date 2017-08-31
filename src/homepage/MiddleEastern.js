import React, { Component } from 'react'
import '../App.css'
import Arab from '../images/arab.png'
import Israel from '../images/israel.png'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class MiddleEastern extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={6}>
            <h1>Middle Eastern</h1>
            <Row>
              <Col xs={6}>
                <div className='country'>
                  <Image src={Arab} className='image' responsive />
                  <p className='subtitle'>Arabic</p>
                  <Link to="/arabic"><span></span></Link>
                </div>
              </Col>
              <Col xs={6}>
                <div className='country'>
                  <Image src={Israel} className='image' responsive />
                  <p className='subtitle'>Hebrew</p>
                  <Link to="/hebrew"><span></span></Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
