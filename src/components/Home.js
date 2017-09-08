import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import source from './assets/img/clients'
import bannerimg from './source.gif'

export default class Home extends Component {
  render () {
    return (
      <div id='everything'>
        {/* <!-- *****************************************************************************************************************
 HEADERWRAP
 ***************************************************************************************************************** --> */}
        <div id='headerwrap'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <h3>Make your investment decision easier with</h3>
                <h1>GRAVITON</h1>
                <h3>Revolutionizing Stock Analysis. Be a part of it.</h3>
              </div>
              <div className='col-lg-8 col-lg-offset-2 himg'>
                <img src={bannerimg} className='img-responsive' />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- *****************************************************************************************************************
 SERVICE LOGOS
 ***************************************************************************************************************** --> */}
        <div id='service'>
          <div className='container'>
            <div className='row centered'>
              <div className='col-md-4'>
                <i className='fa fa-clock-o fa-spin' />
                <h3>Real Time Data</h3>
                <p className='middleDes'>Graviton makes use of real time data from AlphaVantage to provide you with the latest information!</p>

              </div>
              <div className='col-md-4'>
                <i className='fa fa-line-chart' />
                <h3>Data Analytics</h3>
                <p className='middleDes'>Using advanced analytical tools, Graviton makes prediction of the next day price, helping you make a better decision!</p>

              </div>
              <div className='col-md-4'>
                <i className='fa fa-money' />
                <h3>Zero cost</h3>
                <p className='middleDes'>Best of all, this is all availble to you free of charge!</p>

              </div>
            </div>
          </div>
        </div>

        {/* <!-- *****************************************************************************************************************
 TESTIMONIALS
 ***************************************************************************************************************** --> */}
        <div id='twrap'>
          <div className='container centered'>
            <div>
              <div className='col-lg-8 col-lg-offset-2'>
                <i className='fa fa-user-circle' />
                <p>Sign up with us today!</p>
                <button type='button' className='btn btn-secondary'><Link to='/register' className='navbar-brand'>Register</Link></button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- *****************************************************************************************************************
 OUR CLIENTS
 ***************************************************************************************************************** --> */}
        <div id='cwrap'>
          <div className='container'>
            <div className='row centered'>
              <h3>Our Partners</h3>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <img src='http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png' className='img-responsive' />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <img src='http://www.business-science.io/assets/alphavantager-0-1-0.png' className='img-responsive' />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- *****************************************************************************************************************
 FOOTER
 ***************************************************************************************************************** --> */}
        <div id='footerwrap'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <h4>About</h4>
                <div className='hline-w' />
                <p>This app is a group project done during the last 3 weeks of General Assembly Web Immersive Development course.</p>
              </div>
              <div className='col-lg-4'>
                <h4>Social Links</h4>
                <div className='hline-w' />
                <p>
                  <a href='https://github.com/shaunloh89'>Shaun<i className='fa fa-github' /></a>
                  <a href='https://github.com/karl-x'>Jerald<i className='fa fa-github' /></a>
                  <a href='https://github.com/bleetdh'>Brian<i className='fa fa-github' /></a>
                </p>
              </div>
              <div className='col-lg-4'>
                <h4>Our Bunker</h4>
                <div className='hline-w' />
                <p>
                  General Assembly<br />
          8 Claymore Hill <br />
          Singapore 229572<br />
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
