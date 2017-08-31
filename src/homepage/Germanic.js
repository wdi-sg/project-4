import React, { Component } from 'react'
import '../App.css'
import Germany from '../images/germany.png'
import England from '../images/england.png'
import Holland from '../images/holland.png'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Germanic extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={6} xsOffset={6}>
            <h1>European Germanic</h1>
            <Row>
              <Col xs={6}>
                <div className='country'>
                  <Image src={Germany} className='image' responsive />
                  <p className='subtitle'>German</p>
                  <Link to="/german"><span></span></Link>
                </div>
              </Col>
              <Col xs={6}>
                <div className='country'>
                  <Image src={Holland} className='image' responsive />
                  <p className='subtitle'>Dutch</p>
                  <Link to="/dutch"><span></span></Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className='country'>
                  <Image src={England} className='image' responsive />
                  <p className='subtitle'>English</p>
                  <Link to="/english"><span></span></Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
