function MessageUs() {
  return (
    <div className={"col-lg-8 col-md-6 col-sm-12"}>
      <div className={"message-us-card"}>
        <div className='contact-form'>
          <h3 style={{ marginBottom: "15px" }}> {"Message Us"} </h3>
          <form id='contact' action='' method='get'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <input
                  name='name'
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Full Name'
                  required
                />
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <input
                  name='email'
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='E-Mail Address'
                  required
                />
              </div>
              <div className='col-lg-12'>
                <textarea
                  name='message'
                  rows='6'
                  className='form-control'
                  id='message'
                  placeholder='Your Message'
                  required></textarea>
              </div>
              <div className='col-lg-12'>
                <button type='submit' id='form-submit' className='main-button'>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MessageUs;
