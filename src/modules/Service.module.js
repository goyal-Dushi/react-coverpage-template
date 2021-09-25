import ServiceCards from "../components/cards";

function ServiceSection() {
  return (
    <>
      <section className='section home-feature'>
        <div className='container'>
          <h1 className='ndpage'>Our services & focus on</h1>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <ServiceCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceSection;
