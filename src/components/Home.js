import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div>
        {/* <!-- *****************************************************************************************************************
 HEADERWRAP
 ***************************************************************************************************************** --> */}
        <div id='headerwrap'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <h3>Show your work with this beautiful theme</h3>
                <h1>Eyecatching Bootstrap 3 Theme.</h1>
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                <h5>More Lorem Ipsum added here too.</h5>
              </div>
              <div className='col-lg-8 col-lg-offset-2 himg'>
                <img src='assets/img/browser.png' className='img-responsive' />
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
                <i className='fa fa-heart-o' />
                <h4>Handsomely Crafted</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p><br /><a href='#' className='btn btn-theme'>More Info</a></p>
              </div>
              <div className='col-md-4'>
                <i className='fa fa-flask' />
                <h4>Retina Ready</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p><br /><a href='#' className='btn btn-theme'>More Info</a></p>
              </div>
              <div className='col-md-4'>
                <i className='fa fa-trophy' />
                <h4>Quality Theme</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p><br /><a href='#' className='btn btn-theme'>More Info</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- *****************************************************************************************************************
 PORTFOLIO SECTION
 ***************************************************************************************************************** --> */}
        <div id='portfoliowrap'>
          <h3>LATEST WORKS</h3>

          <div className='portfolio-centered'>
            <div className='recentitems portfolio'>
              <div className='portfolio-item graphic-design'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_09.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Graphic Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_09.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item web-design'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_02.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Web Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_02.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item graphic-design'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_03.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Graphic Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_03.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item graphic-design'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_04.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Graphic Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_04.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item books'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_05.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Book Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_05.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item graphic-design'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_06.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Graphic Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_06.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item books'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_07.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Book Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_07.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item graphic-design'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_08.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Graphic Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_08.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item web-design'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_01.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Web Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_01.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='portfolio-item books'>
                <div className='he-wrap tpl6'>
                  <img src='assets/img/portfolio/portfolio_10.jpg' alt='' />
                  <div className='he-view'>
                    <div className='bg a0' data-animate='fadeIn'>
                      <h3 className='a1' data-animate='fadeInDown'>A Book Design Item</h3>
                      <a data-rel='prettyPhoto' href='assets/img/portfolio/portfolio_10.jpg' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-search' /></a>
                      <a href='single-project.html' className='dmbutton a2' data-animate='fadeInUp'><i className='fa fa-link' /></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* <!-- *****************************************************************************************************************
 MIDDLE CONTENT
 ***************************************************************************************************************** --> */}

        <div className='container mtb'>
          <div className='row'>
            <div className='col-lg-4 col-lg-offset-1'>
              <h4>More About Our Agency.</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              <p><br /><a href='about.html' className='btn btn-theme'>More Info</a></p>
            </div>

            <div className='col-lg-3'>
              <h4>Frequently Asked</h4>
              <div className='hline' />
              <p><a href='#'>How cool is this theme?</a></p>
              <p><a href='#'>Need a nice good-looking site?</a></p>
              <p><a href='#'>Is this theme retina ready?</a></p>
              <p><a href='#'>Which version of Font Awesome uses?</a></p>
              <p><a href='#'>Free support is integrated?</a></p>
            </div>

            <div className='col-lg-3'>
              <h4>Latest Posts</h4>
              <div className='hline' />
              <p><a href='single-post.html'>Our new site is live now.</a></p>
              <p><a href='single-post.html'>Retina ready is not an option.</a></p>
              <p><a href='single-post.html'>Bootstrap 3 framework is the best.</a></p>
              <p><a href='single-post.html'>You need this theme, buy it now.</a></p>
              <p><a href='single-post.html'>This theme is what you need.</a></p>
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
                <i className='fa fa-comment-o' />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <h4><br />Marcel Newman</h4>
                <p>WEB DESIGNER - BLACKTIE.CO</p>
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <div className='col-lg-4'>
                <h4>Social Links</h4>
                <div className='hline-w' />
                <p>
                  <a href='#'><i className='fa fa-dribbble' /></a>
                  <a href='#'><i className='fa fa-facebook' /></a>
                  <a href='#'><i className='fa fa-twitter' /></a>
                  <a href='#'><i className='fa fa-instagram' /></a>
                  <a href='#'><i className='fa fa-tumblr' /></a>
                </p>
              </div>
              <div className='col-lg-4'>
                <h4>Our Bunker</h4>
                <div className='hline-w' />
                <p>
          Some Ave, 987,<br />
          23890, New York,<br />
          United States.<br />
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
