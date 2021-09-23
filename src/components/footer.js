import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <section className='section colored' id='contactus'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='center-heading'>
                  <h2 className='section-title'>Talk To Us</h2>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <h5 className='margin-bottom-30'>Keep in touch</h5>
                <div className='contact-text'>
                  <p>
                    <strong>
                      <i className='fa fa-envelope' aria-hidden='true'></i>
                    </strong>{" "}
                    &nbsp; &nbsp; Info@goinida.digital
                    <br />
                  </p>
                  <p>
                    <strong>
                      <i className='fa fa-phone' aria-hidden='true'></i>
                    </strong>{" "}
                    &nbsp; &nbsp; +91 808 819 1336
                    <br />
                  </p>
                  <p>
                    <a href='https://wa.me/918088191336'>
                      <strong>
                        <i className='fa fa-whatsapp' aria-hidden='true'></i>
                      </strong>{" "}
                      &nbsp; &nbsp; +91 808 819 1336
                      <br />
                    </a>
                  </p>
                </div>
              </div>
              <div className='col-lg-8 col-md-6 col-sm-12'>
                <div className='contact-form'>
                  <form id='contact' action='' method='get'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-12 col-sm-12'>
                        <fieldset>
                          <input
                            name='name'
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='Full Name'
                            required=''
                          />
                        </fieldset>
                      </div>
                      <div className='col-lg-6 col-md-12 col-sm-12'>
                        <fieldset>
                          <input
                            name='email'
                            type='email'
                            className='form-control'
                            id='email'
                            placeholder='E-Mail Address'
                            required=''
                          />
                        </fieldset>
                      </div>
                      <div className='col-lg-12'>
                        <fieldset>
                          <textarea
                            name='message'
                            rows='6'
                            className='form-control'
                            id='message'
                            placeholder='Your Message'
                            required=''></textarea>
                        </fieldset>
                      </div>
                      <div className='col-lg-12'>
                        <fieldset>
                          <button
                            type='submit'
                            id='form-submit'
                            className='main-button'>
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <ul className='social'>
                  <li>
                    <a href='www.facebook.com'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='www.twitter.com'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='www.linkedin.com'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <p className='copyright'>
                  Copyright &copy; GOINDIA.DIGITAL 2021
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
