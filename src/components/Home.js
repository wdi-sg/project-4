import React, { Component } from 'react'
import Register from './Register'

export default class Home extends Component {
  render () {
    return (
      <div id='everything'>
        {/* <!-- *****************************************************************************************************************
 HEADERWRAP
 ***************************************************************************************************************** --> */}
        <div id='headerwrap'>
          <div className='container'>
            <div id='everything' className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <h3>Make your investment decision easier with</h3>
                <h1>GRAVITON</h1>
                <h5>You choose the stocks, we will do the prediction for YOU!</h5>
              </div>
              <div className='col-lg-8 col-lg-offset-2 himg'>
                <img src='https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/source.gif' className='img-responsive' />
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
            <div className='everything'>
              <div className='col-lg-8 col-lg-offset-2'>
                <i className='fa fa-user-circle' />
                <p>Sign up with us today!</p>
                <button type='button' className='btn btn-secondary'>Register</button>
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
              <h3>OUR CLIENTS</h3>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <img src='assets/img/clients/client01.png' className='img-responsive' />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <img src='assets/img/clients/client02.png' className='img-responsive' />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <img src='assets/img/clients/client03.png' className='img-responsive' />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <img src='assets/img/clients/client04.png' className='img-responsive' />
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
