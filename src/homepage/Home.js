import React, { Component } from 'react'
import '../App.css'
import Germany from '../images/germany.png'
import Holland from '../images/holland.png'
import China from '../images/china.png'
import Japan from '../images/japan.png'
import Korea from '../images/korea.png'
import England from '../images/england.png'
import France from '../images/france.png'
import Italy from '../images/italy.png'
import Spain from '../images/spain.png'
import Arab from '../images/arab.png'
import Israel from '../images/israel.png'
import Russia from '../images/russia.png'
import Greece from '../images/greece.png'
import Thailand from '../images/thailand.png'
import Vietnam from '../images/vietnam.png'
import Indonesia from '../images/indonesia.png'
import Philippines from '../images/philippines.png'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
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
          </Col>
        </Row>
        <Row>
          <Col xs={12}>

            <Row>
              <Col xs={3}>
                <h1>East Asian</h1>
                <div className='country'>
                  <Image src={China} className='image' responsive />
                  <p className='subtitle'>Chinese</p>
                  <Link to="/chinese"><span></span></Link>
                </div>
              </Col>
              <Col xs={3}></Col>
              <Col xs={3}></Col>
              <Col xs={3}>
                <div className='country'>
                  <Image src={England} className='image' responsive />
                  <p className='subtitle'>English</p>
                  <Link to="/english"><span></span></Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <div className='country'>
                  <Image src={Japan} className='image' responsive />
                  <p className='subtitle'>Japanese</p>
                  <Link to="/japanese"><span></span></Link>
                </div>
              </Col>
              <Col xs={3}>
                <div className='country'>
                  <Image src={Korea} className='image' responsive />
                  <p className='subtitle'>Korean</p>
                  <Link to="/korean"><span></span></Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={3}></Col>
              <Col xs={3}></Col>
              <Col xs={3}></Col>
              <Col xs={3}>
                <h1>European Romance</h1>
                <div className='country'>
                  <Image src={Spain} className='image' responsive />
                  <p className='subtitle'>Spanish</p>
                  <Link to="/spanish"><span></span></Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={3}>
                <h1>Middle Eastern</h1>
                <div className='country'>
                  <Image src={Arab} className='image' responsive />
                  <p className='subtitle'>Arabic</p>
                  <Link to="/arabic"><span></span></Link>
                </div>
              </Col>
              <Col xs={3}></Col>
              <Col xs={3}>
                <div className='country'>
                  <Image src={France} className='image' responsive />
                  <p className='subtitle'>French</p>
                  <Link to="/french"><span></span></Link>
                </div>
              </Col>
              <Col xs={3}>
                <div className='country'>
                  <Image src={Italy} className='image' responsive />
                  <p className='subtitle'>Italian</p>
                  <Link to="/italian"><span></span></Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Row>
              <Col xs={12}>
                <div className='country'>
                  <Image src={Israel} className='image' responsive />
                  <p className='subtitle'>Hebrew</p>
                  <Link to="/hebrew"><span></span></Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={6} xsOffset={3}>
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
        <Row>
          <Col xs={12}>
            <h1>South East Asian</h1>
            <Row>
              <Col xs={3}>
                <div className='country'>
                  <Image src={Thailand} className='image' responsive/>
                  <p className='subtitle'>Thai</p>
                  <Link to="/thai"><span></span></Link>
                </div>
              </Col>
              <Col xs={3}>
                <div className='country'>
                  <Image src={Vietnam} className='image' responsive/>
                  <p className='subtitle'>Vietnamese</p>
                  <Link to="/vietnamese"><span></span></Link>
                </div>
              </Col>
              <Col xs={3}>
                <div className='country'>
                  <Image src={Indonesia} className='image' responsive/>
                  <p className='subtitle'>Bahasa Indonesia</p>
                  <Link to="/bahasaindo"><span></span></Link>
                </div>
              </Col>
              <Col xs={3}>
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
