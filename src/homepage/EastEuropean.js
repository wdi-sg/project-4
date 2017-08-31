import React, { Component } from 'react'
import '../App.css'
import Russia from '../images/russia.png'
import Greece from '../images/greece.png'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class EastEuropean extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={6} xsOffset={6}>
            <h1>European East</h1>
            <Row>
              <Col xs={6}>
                <div className='country'>
                  <Image src={Russia} className='image' responsive />
                  <p className='subtitle'>Russian</p>
                  <Link to="/russian"><span></span></Link>
                </div>
              </Col>
              <Col xs={6}>
                <div className='country'>
                  <Image src={Greece} className='image' responsive />
                  <p className='subtitle'>Greek</p>
                  <Link to="/greek"><span></span></Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
