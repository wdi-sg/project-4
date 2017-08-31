import React, { Component } from 'react'
import '../App.css'
import Thailand from '../images/thailand.png'
import Vietnam from '../images/vietnam.png'
import Indonesia from '../images/indonesia.png'
import Philippines from '../images/philippines.png'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class SouthEastAsian extends Component {
  render () {
    return (
      <div>
          <Row>
            <Col xs={6}>
              <h1>South East Asian</h1>
              <Row>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Thailand} className='image' responsive/>
                    <p className='subtitle'>Thai</p>
                    <Link to="/thai"><span></span></Link>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Vietnam} className='image' responsive/>
                    <p className='subtitle'>Vietnamese</p>
                    <Link to="/vietnamese"><span></span></Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Indonesia} className='image' responsive/>
                    <p className='subtitle'>Bahasa Indonesia</p>
                    <Link to="/bahasaindo"><span></span></Link>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className='country'>
                    <Image src={Philippines} className='image' responsive/>
                    <p className='subtitle'>Tagalog</p>
                    <Link to="/tagalog"><span></span></Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    )
  }
}
