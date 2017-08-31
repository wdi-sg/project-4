import React, { Component } from 'react'
import '../App.css'
import China from '../images/china.png'
import Japan from '../images/japan.png'
import Korea from '../images/korea.png'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class EastAsian extends Component {
  render () {
    return (
      <div>
          <Row>
            <Col xs={6}>
              <h1>East Asian</h1>
              <Row>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Japan} className='image' responsive />
                    <p className='subtitle'>Japanese</p>
                    <Link to="/japanese"><span></span></Link>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Korea} className='image' responsive />
                    <p className='subtitle'>Korean</p>
                    <Link to="/korean"><span></span></Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={China} className='image' responsive />
                    <p className='subtitle'>Chinese</p>
                    <Link to="/chinese"><span></span></Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    )
  }
}
