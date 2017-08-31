import React, { Component } from 'react'
import '../App.css'
import France from '../images/france.png'
import Italy from '../images/italy.png'
import Spain from '../images/spain.png'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Romance extends Component {
  render () {
    return (
      <div>
          <Row>
            <Col xs={6} xsOffset={6}>
              <h1>European Romance</h1>
              <Row>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={France} className='image' responsive />
                    <p className='subtitle'>French</p>
                    <Link to="/french"><span></span></Link>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Italy} className='image' responsive />
                    <p className='subtitle'>Italian</p>
                    <Link to="/italian"><span></span></Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Spain} className='image' responsive />
                    <p className='subtitle'>Spanish</p>
                    <Link to="/spanish"><span></span></Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    )
  }
}
