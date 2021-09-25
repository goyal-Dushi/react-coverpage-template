import React from "react";
function BottomNav() {
  const date = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <ul className='social'>
                {navItems?.map((item) => (
                  <li key={item?.id}>
                    <a href={item?.url}>
                      <i className={item?.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <p className='copyright'>
                Copyright &copy; GOINDIA.DIGITAL {date}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
const navItems = [
  {
    id: 1,
    icon: "fa fa-facebook",
    url: "www.facebook.com",
  },
  {
    id: 2,
    icon: "fa fa-twitter",
    url: "www.twitter.com",
  },
  {
    id: 3,
    icon: "fa fa-linkedin",
    url: "www.linkedin.com",
  },
];
export default BottomNav;
