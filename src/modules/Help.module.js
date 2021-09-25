function HelpSection() {
  return (
    <section className='section padding-bottom-100' id='bman'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix'>
            <div className='left-heading'>
              <h2 className='section-title'>
                We can help you to grow your business
              </h2>
            </div>
            <div className='left-text'>
              <h4 className='subheading'>Business Management</h4>
              <p>
                We manage all your business needs with end-to-end development
                cycle, your investment and trust, we will take care of the
                business, planning, organizing, leading, and controlling all the
                requirements with complete support.{" "}
              </p>
              <p>
                <i className='fa fa-square' aria-hidden='true'></i> &nbsp;Custom
                software Applications <br />
                <i className='fa fa-square' aria-hidden='true'></i> &nbsp;ERP
                Applications
                <br />
                <i className='fa fa-square' aria-hidden='true'></i> &nbsp;Web
                Applications – Static, Dynamic and E-commerce
                <br />
                <i className='fa fa-square' aria-hidden='true'></i> &nbsp;Search
                Engine Optimization
                <br />
                <i className='fa fa-square' aria-hidden='true'></i>{" "}
                &nbsp;Digital Marketing (Paid or unpaid promotions)
              </p>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div
            className='col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big'
            data-scroll-reveal='enter right move 30px over 0.6s after 0.4s'>
            <img
              src='assets/images/grow.png'
              className='rounded img-fluid d-block mx-auto'
              alt='App'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
