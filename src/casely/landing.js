import React from "react";
import Faq from "react-faq-component";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className='welcome-area' id='welcome'>
          <div className='header-text'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className='robo-anim'>
                    <div className='robot'>
                      <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <g id='hover'>
                          <ellipse
                            id='shadow_2_'
                            opacity='0.4'
                            fill='#2C3332'
                            cx='300'
                            cy='703.375'
                            rx='88.971'
                            ry='30.625'></ellipse>
                        </g>
                        <g id='arms'>
                          <g id='left'>
                            <path
                              id='arm_1_'
                              fill='#BABEB7'
                              d='M183.975,430.936c-50.27-21.595-96.437,29.654-96.132,54.383
                                    c0.06,4.868,7.836,11.424,11.509,7.079c12.145-14.369,36.979-35.733,55.676-16.486
                                    C156.498,477.423,189.086,433.132,183.975,430.936z'></path>
                            <g id='hand_1_'>
                              <path
                                id='shadow'
                                fill='#BABEB7'
                                d='M63.712,520.545l5.657-7.071c0,0-11.453-8.997-9.402-12.554
                                        c4.469-7.751,15.935-9.515,25.612-3.936c9.676,5.579,13.898,16.385,9.43,24.136c-1.736,3.013-7.363,0.091-7.363,0.091
                                        l-5.657,7.071l0.058,6.027c8.473,0.83,16.454-1.564,21.692-6.847c1.235-1.245,6.329-7.287,7.229-8.85
                                        c1.826-3.166-7.579-26.607-18.73-33.036c-8.361-4.82-31.172-5.074-31.172-5.074s-5.691,5.814-8.805,11.216
                                        c-5.77,10.006-2.253,23.271,7.678,32.486L63.712,520.545z'></path>
                              <path
                                id='top'
                                fill='#DCE0DA'
                                d='M69.37,513.474c-5.443-5.817-7.202-13.631-3.746-19.625c4.469-7.751,15.935-9.514,25.612-3.935
                                        c9.676,5.578,13.899,16.385,9.43,24.135c-2.575,4.468-7.478,6.932-13.02,7.162l0.058,6.027
                                        c10.471,1.026,20.192-2.873,24.911-11.06c6.976-12.099,0.385-28.965-14.719-37.673c-15.104-8.708-33.002-5.957-39.977,6.142
                                        c-5.769,10.007-2.253,23.271,7.679,32.486L69.37,513.474z'></path>
                            </g>
                          </g>
                          <g id='right'>
                            <path
                              id='arm'
                              fill='#DCE0DA'
                              d='M416.025,430.936c50.27-21.595,96.437,29.654,96.131,54.383
                                    c-0.059,4.868-7.836,11.424-11.509,7.079c-12.145-14.369-36.979-35.733-55.676-16.486
                                    C443.502,477.423,410.914,433.132,416.025,430.936z'></path>
                            <g id='hand'>
                              <path
                                id='shadow_1_'
                                fill='#BABEB7'
                                d='M536.287,520.545l-5.656-7.071c0,0,11.453-8.997,9.402-12.554
                                        c-4.469-7.751-15.936-9.515-25.612-3.936s-13.898,16.385-9.43,24.136c1.736,3.013,7.362,0.091,7.362,0.091l5.657,7.071
                                        l-0.058,6.027c-8.474,0.83-16.455-1.564-21.692-6.847c-1.235-1.245-6.329-7.287-7.229-8.85
                                        c-1.826-3.166,7.578-26.607,18.73-33.036c8.361-4.82,31.172-5.074,31.172-5.074s5.691,5.814,8.805,11.216
                                        c5.77,10.006,2.253,23.271-7.678,32.486L536.287,520.545z'></path>
                              <path
                                id='top_1_'
                                fill='#DCE0DA'
                                d='M530.631,513.474c5.443-5.817,7.201-13.631,3.745-19.625
                                        c-4.469-7.751-15.935-9.514-25.612-3.935c-9.676,5.578-13.898,16.385-9.43,24.135c2.575,4.468,7.479,6.932,13.02,7.162
                                        l-0.058,6.027c-10.472,1.026-20.192-2.873-24.911-11.06c-6.975-12.099-0.385-28.965,14.72-37.673s33.003-5.957,39.978,6.142
                                        c5.769,10.007,2.252,23.271-7.68,32.486L530.631,513.474z'></path>
                            </g>
                          </g>
                        </g>
                        <g id='body'>
                          <g id='chassie'>
                            <g id='base'>
                              <path
                                fill='#DCE0DA'
                                d='M137.424,525.622c0-47.887,60.669-219.342,162.576-219.342c101.907,0,162.576,171.854,162.576,219.342
                                        c0,47.489-137.88,56.438-162.576,56.438C275.303,582.06,137.424,573.511,137.424,525.622z'></path>
                            </g>
                            <g id='highlight'>
                              <defs>
                                <path
                                  id='SVGID_1_'
                                  d='M137.424,525.622c0-47.887,60.669-219.342,162.576-219.342c101.907,0,162.576,171.854,162.576,219.342
                                            c0,47.489-137.88,56.438-162.576,56.438C275.303,582.06,137.424,573.511,137.424,525.622z'></path>
                              </defs>
                              <clipPath id='SVGID_2_'>
                                <use href='#SVGID_1_' overflow='visible'></use>
                              </clipPath>
                              <path
                                clipPath='url(#SVGID_2_)'
                                fill='#BABEB7'
                                d='M455.667,419c0,0-38.299,61.503-156.983,61.503
                                        c-67.685,0-86.351,14.831-96.684,39.164S203.368,588,298.684,588s1.816,21.923,1.816,21.923s-198.833-42.589-198.833-43.589
                                        s54.333-215,54.333-215L455.667,419z'></path>
                            </g>
                          </g>
                          <g id='progress-indicator'>
                            <g id='divet'>
                              <path
                                id='highlight-bottom'
                                fill='#EAECE8'
                                d='M425.182,524.775l-4.682-21.211c0,0-48.18,19.563-120.34,19.563
                                        s-120.82-19.079-120.82-19.079l-4.542,20.636c0,0,37.523,20.052,125.363,20.052S425.182,524.775,425.182,524.775z'></path>
                              <path
                                id='divet-bottom'
                                fill='#4C4C4C'
                                d='M420.682,521.823l-4.514-16.654c0,0-46.447,17.959-116.014,17.959
                                        c-69.566,0-116.477-17.551-116.477-17.551l-4.379,16.159c0,0,36.174,18.597,120.856,18.597
                                        C384.837,540.333,420.682,521.823,420.682,521.823z'></path>
                              <polygon
                                id='shadow-right_1_'
                                fill='#BABEB7'
                                points='416.168,505.169 420.5,503.564 425.182,524.775 420.682,521.823 			'></polygon>
                              <polygon
                                id='shadow-left'
                                fill='#8F918D'
                                points='183.677,505.577 179.34,504.049 174.797,524.685 179.297,521.736 			'></polygon>
                              <path
                                id='shadow-bottom'
                                fill='#BABEB7'
                                d='M204.738,530.305l-5.786,2.959c0,0-8.125-2.072-14.702-4.556
                                        s-9.453-4.023-9.453-4.023l4.5-2.948c0,0,4.039,2.192,11.313,4.463S204.738,530.305,204.738,530.305z'></path>
                            </g>
                            <g id='completed'>
                              <path
                                id='blue'
                                fill='#84D3E8'
                                d='M300.154,523.128c-69.566,0-116.477-17.551-116.477-17.551l-4.379,16.159
                                        c0,0,36.174,18.597,120.856,18.597c28.812,0,51.965-2.144,69.983-4.971l-1.808-18.073
                                        C349.822,520.518,326.67,523.128,300.154,523.128z'></path>
                              <path
                                id='blue-shadow'
                                fill='#6DADBC'
                                d='M208.568,512.712c-15.682-3.741-24.93-7.135-24.93-7.135l-4.437,16.159
                                        c0,0,8.037,4.175,25.537,8.568C205.625,524.125,206,520.875,208.568,512.712z'></path>
                            </g>
                          </g>
                        </g>
                        <g id='head'>
                          <g id='face'>
                            <path
                              id='screen-shadow'
                              fill='#9AB2B0'
                              d='M418.268,235.276C377.932,233.144,327.52,232,300.003,232
                                    c-27.517,0-77.766,1.144-118.102,3.276c-34.071,1.801-41.222,17.035-41.222,69.742s3.15,88.311,24.65,107.819
                                    c35.831,32.511,101.258,47.829,134.673,47.829c33.832,0,99.06-15.318,134.891-47.829c21.5-19.508,24.758-55.112,24.758-107.819
                                    S452.338,237.078,418.268,235.276z'></path>
                            <path
                              id='screen'
                              fill='#A4BCB9'
                              d='M164.381,353.965c0,55.225,107.043,76.693,135.619,76.693
                                    c28.576,0,135.618-21.469,135.618-76.693c0-100.027-60.717-123.293-135.618-123.293
                                    C225.101,230.671,164.381,253.938,164.381,353.965z'></path>
                            <path
                              id='case_x5F_shadow'
                              fill='#EAECE8'
                              d='M300,239c27.54,0,78.739,1.16,119.383,3.309c15.837,0.837,18.06,4.715,19.388,7.032
                                    c5.026,8.771,5.671,29.167,5.671,45.955c0,49.954-0.156,81.738-16.287,96.374c-31.639,28.708-96.014,44.997-128.154,44.997
                                    c-32.048,0-95.295-16.289-126.934-44.997c-16.039-14.552-17.176-46.356-17.176-96.374c0-16.825,0.638-37.258,5.614-46
                                    c1.395-2.45,3.503-6.153,19.279-6.987C221.426,240.16,272.541,239,300,239 M300,210.5c-80.5,0-160.11,7.167-160.11,60.795
                                    S141.095,385.151,162.971,405C199.429,438.08,266,453.666,300,453.666c34.424,0,100.792-15.586,137.25-48.666
                                    c21.876-19.849,23.191-80.076,23.191-133.705S380.5,210.5,300,210.5z'></path>
                            <path
                              id='case'
                              fill='#DCE0DA'
                              d='M300,248c27.54,0,78.739,1.16,119.383,3.309c15.837,0.837,18.06,4.715,19.388,7.032
                                    c5.026,8.771,5.671,29.167,5.671,45.955c0,49.954-3.156,81.738-19.287,96.374c-31.639,28.708-93.014,43.997-125.154,43.997
                                    c-32.048,0-93.295-15.289-124.934-43.997c-16.039-14.552-19.176-46.356-19.176-96.374c0-16.825,0.638-37.258,5.614-46
                                    c1.395-2.45,3.503-6.153,19.279-6.987C221.426,249.16,272.541,248,300,248 M300,230c-27.999,0-79.126,1.164-120.167,3.333
                                    c-34.667,1.833-41.943,17.333-41.943,70.962s3.205,89.856,25.081,109.705C199.429,447.08,266,462.666,300,462.666
                                    c34.424,0,100.792-15.586,137.25-48.666c21.876-19.849,25.191-56.076,25.191-109.705s-7.441-69.129-42.108-70.962
                                    C379.292,231.164,327.998,230,300,230L300,230z'></path>
                          </g>
                          <g id='eyes'>
                            <ellipse
                              id='left_1_'
                              fill='#2C3332'
                              cx='231'
                              cy='316.667'
                              rx='6.333'
                              ry='17'></ellipse>
                            <ellipse
                              id='right_1_'
                              fill='#2C3332'
                              cx='369'
                              cy='316.667'
                              rx='6.334'
                              ry='17'></ellipse>
                          </g>
                          <g id='indicators'>
                            <path
                              id='mount'
                              fill='#DCE0DA'
                              d='M354.333,220.333c0-29.916-24.252-54.167-54.167-54.167c-29.916,0-54.167,24.251-54.167,54.167
                                    c0,4.667,24.251,4.667,54.167,4.667C330.081,225,354.333,225,354.333,220.333z'></path>
                            <g id='leds'>
                              <circle
                                id='yellow'
                                fill='#F0C419'
                                cx='300.418'
                                cy='207'
                                r='8.084'></circle>
                              <circle
                                id='red'
                                fill='#E64C3C'
                                cx='324.67'
                                cy='206'
                                r='8.084'></circle>
                              <circle
                                id='green'
                                fill='#4EBA64'
                                cx='275.33'
                                cy='206'
                                r='8.083'></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12'>
                  <h1>GO INDIA</h1>
                  <h2 className='tagline'>Great Minds Together</h2>

                  <h2 className='subtitle'>
                    The future is fast approaching, & new era of
                    <br /> <strong></strong>
                  </h2>
                  <h4 className='subtitle'>
                    <span
                      className='txt-rotate'
                      data-period='2000'
                      data-rotate='[ "technology services", "products", "digital innovation", "IT Consulting "]'></span>
                  </h4>
                  <h2 className='subtitle'>is here</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='section home-feature' id='goanalytics'>
          <div className='container'>
            <h1 className='ndpage'>Our services & focus on</h1>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div
                    className='col-lg-4 col-md-6 col-sm-6 col-12'
                    data-scroll-reveal='enter bottom move 50px over 0.6s after 0.2s'>
                    <div className='features-small-item'>
                      <div className='icon'>
                        <i className='fa fa-line-chart' aria-hidden='true'></i>
                      </div>
                      <h5 className='features-title'>
                        Times series forecasting{" "}
                      </h5>
                      <p>
                        Time series forecasting is part of predictive analytics.
                        It can show likely changes in the data, like seasonality
                        or cyclic behavior, which provides a better
                        understanding of data variables and helps forecast
                        better.
                      </p>
                    </div>
                  </div>

                  <div
                    className='col-lg-4 col-md-6 col-sm-6 col-12'
                    data-scroll-reveal='enter bottom move 50px over 0.6s after 0.4s'>
                    <div className='features-small-item'>
                      <div className='icon'>
                        <i
                          className='fa fa-connectdevelop'
                          aria-hidden='true'></i>
                      </div>
                      <h5 className='features-title'>
                        Marketing Mix Modelling{" "}
                      </h5>
                      <p>
                        Statistical analyzation such as multivariate regressions
                        on sales and marketing time series data to estimate the
                        impact of various marketing tactics (marketing mix) on
                        sales and then forecast the impact of future sets of
                        tactics.
                      </p>
                    </div>
                  </div>

                  <div
                    className='col-lg-4 col-md-6 col-sm-6 col-12'
                    data-scroll-reveal='enter bottom move 50px over 0.6s after 0.6s'>
                    <div className='features-small-item'>
                      <div className='icon'>
                        <i className='fa fa-area-chart' aria-hidden='true'></i>
                      </div>
                      <h5 className='features-title'>Price Elasticity</h5>
                      <p>
                        GO ANALYTICS measure the effect of a price change or a
                        change in the quantity supplied on the demand for a
                        product or service.with the MMM and TSF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className='s-title'>GO ANALYTICS</h2>
            <h4 className='subheading'>
              Can predictive analytics improve performance? <br />
              What are analytics tools?
            </h4>
            <p className='left-text'>
              Business analytics tools are types of application software that
              retrieve data from one or more business systems and combine it in
              a repository, such as a data warehouse, to be reviewed and
              analysed.{" "}
            </p>
            <p className='left-text'>
              <strong>In simple terms below:</strong>Analytics is the systematic
              computational analysis of data or statistics. It is used for the
              discovery, interpretation, and communication of meaningful
              patterns in data. It also entails applying data patterns towards
              effective decision-making.{" "}
            </p>
            <p className='left-text'>
              we focus on the four types of data analytics we encounter in data
              science: Descriptive, Diagnostic, Predictive and Prescriptive.
            </p>
          </div>
        </section>

        <section
          className='section padding-top-70 padding-bottom-0'
          id='digikaagaz'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-lg-5 col-md-12 col-sm-12 align-self-center'
                data-scroll-reveal='enter left move 30px over 0.6s after 0.4s'>
                <img
                  src='assets/images/hrms.png'
                  className='rounded img-fluid d-block mx-auto'
                  alt='App'
                />
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix'>
                <div className='left-heading'>
                  <h2 className='section-title'>Digi Kaagaz</h2>
                </div>
                <div className='left-text'>
                  <p>
                    Digi kaagaz is complete paperless data security tool for
                    sourcing job and HRM portal management. <br />
                    Say “No” to Xerox, third party scanners, unsecured email
                    box, data in everyday life is very important
                  </p>
                </div>
                <h4 className='subheading'>JOB Portal</h4>
                <div className='left-text'>
                  <p>
                    Job portals, or job boards, which are an integral part of
                    Digikagaz first view application, where you can advertise
                    jobs and search for resumes. They are an integral part
                    between a Job seekers and Recruiter, of almost every hiring
                    process and using them effectively will translate into
                    qualified candidates for relative to the requirement.
                  </p>
                </div>
                <h4 className='subheading'>HRMS Portal</h4>
                <div className='left-text'>
                  <p>
                    Digi Kaagaz is a suite of software applications used to
                    manage human resources and related processes throughout the
                    employee lifecycle. which enables a company to fully
                    understand its workforce while staying compliant with
                    changing tax laws and labor regulations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className='subheading'>
                Idiomatic Expressions of Digi Kaagaz
              </h4>
              <div className='left-text'>
                <ul className='desc-list'>
                  <li>
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;DIGI Kagaz is complete paperless data secured tool for
                    job and HRM portal management.
                  </li>
                  <li>
                    <i className='fa fa-square' aria-hidden='true'></i> &nbsp;It
                    provides end to end process which includes recruitment,
                    documentation, BGC, offer letter,Credentials, Payroll,
                    Procurement.
                  </li>
                  <li>
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;user access can upload resume, build network, maintain
                    Documents
                  </li>
                  <li>
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;Roles will be segregated accordingly for example Cloud
                    role, Developer, Cyber Security, Network Admin etc.
                  </li>
                  <li>
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;Admin Access can source profile according to roles
                    tagged, send email, if shortlisted, schedule a virtual call
                    on Digi Teams
                  </li>
                  <li>
                    <i className='fa fa-square' aria-hidden='true'></i> &nbsp;If
                    User selected, submit docs for BGC (if bgc cleared) release
                    offer letter, induction
                  </li>
                  <li>
                    <i className='fa fa-square' aria-hidden='true'></i> &nbsp;GO
                    Endure includes our GOINDIA Learning portal access with
                    subscription options for all required courses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='section colored' id='dk_learning'>
          <div className='container'>
            <div className='container'>
              <div className='left-heading'>
                <h2 className='section-title'>DIGI KAAGAZ Learning</h2>
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
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Identity and Access Management
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Active Directory and Exchange Email
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Sailpoint IIQ
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Sailpoint Identity Now
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Okta{" "}
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Auth0
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Ping Identity
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Cyber Ark
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;RSA IGL
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Data Science
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Machine Learning
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Artificial intelligence
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Python and R programming
                      </li>
                      <li>
                        <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                        &nbsp;Java Script, Java, Angular, API, Node js and React
                        Js
                      </li>
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
                    We manage all your business needs with end-to-end
                    development cycle, your investment and trust, we will take
                    care of the business, planning, organizing, leading, and
                    controlling all the requirements with complete support.{" "}
                  </p>
                  <p>
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;Custom software Applications <br />
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;ERP Applications
                    <br />
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;Web Applications – Static, Dynamic and E-commerce
                    <br />
                    <i className='fa fa-square' aria-hidden='true'></i>{" "}
                    &nbsp;Search Engine Optimization
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
        <section className='section colored-1' id='faq'>
          <div className='container'>
            <Faq className='faq-row' data={gendata} />
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;

const gendata = {
  title: "General",
  rows: [
    {
      title:
        "1.	I want to know more about one of your trainings. Whom can I contact?",
      content:
        "- You can contact one of the below numbers and we would love to answer your queries anytime.",
    },
    {
      title: "2.	How can I register for training?",
      content:
        "- Please fill the form with the course details you want to enroll and someone from our team will contact you back ASAP.",
    },
    {
      title: "3.	What if I miss few training sessions?",
      content:
        "- You will be provided the recorded sessions anyway so that you can go through it but still if you have any queries, you can contact the trainer to clear them.",
    },
    {
      title: "4.	Can I have any Demo video of training before I get enroll?",
      content: "- Of course, we will provide you a demo one before enrolling.",
    },
    {
      title:
        "5.	Will I get recordings of the training session and for how long?",
      content:
        "- You will be provided access to the videos along with the materials if any and access will be for 1 year at least. This can be extended if needed.",
    },
    {
      title: "6. Do I get any support from Trainer after training completion?",
      content:
        "- Yes, you will be provided support from us for few months and can be extended on request.",
    },
  ],
};
