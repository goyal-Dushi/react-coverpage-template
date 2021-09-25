import serviceData from "../data/services.json";

function ServiceCards() {
  return (
    <>
      {serviceData?.map((item) => (
        <div
          key={item?.id}
          className='col-lg-4 col-md-6 col-sm-6 col-12'
          data-scroll-reveal='enter bottom move 50px over 0.6s after 0.6s'>
          <div className='features-small-item'>
            <div className='icon'>
              <i className='fa fa-area-chart' aria-hidden='true'></i>
            </div>
            <h5 className='features-title'> {item?.title} </h5>
            <p>{item?.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ServiceCards;
