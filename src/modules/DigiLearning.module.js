import learningItem from "../data/digiLearning.content.json";

function DigiLearningSection() {
  return (
    <section className='section colored' id='dk_learning'>
      <div className='container'>
        <div className='container'>
          <div className='left-heading'>
            <h2 className='section-title'> {"DIGI KAAGAZ Learning"} </h2>
          </div>
          <div className='row'>
            <div
              className='col-lg-5 col-md-12 col-sm-12 align-self-center'
              data-scroll-reveal='enter left move 30px over 0.6s after 0.4s'>
              <img
                src='assets/images/dklp.png'
                className='rounded img-fluid d-block mx-auto'
                alt='App'
              />
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix'>
              <h4 className='subheading'>
                Best Trainings offered by DIGI KAAGAZ Learning
              </h4>
              <div className='left-text'>
                <ul className='desc-list'>
                  {learningItem?.map((item) => (
                    <li id={item?.id}>
                      <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                      &nbsp;{item?.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <img
          src='assets/images/glmodule.png'
          className='rounded img-fluid d-block mx-auto'
          alt='App'
        />
      </div>
    </section>
  );
}

export default DigiLearningSection;
