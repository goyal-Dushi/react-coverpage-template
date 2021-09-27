import React from "react";
import "./bottomNav.css";
import { Container } from "react-bootstrap";
function BottomNav() {
  const date = new Date().getFullYear();
  return (
    <>
      <footer>
        <Container
          className={
            "d-flex align-items-center justify-content-around flex-column"
          }>
          <ul
            style={{ listStyle: "none" }}
            className={
              "d-flex flex-row justify-content-evenly align-items-center icon-container"
            }>
            {navItems?.map((item) => (
              <li className={"text-center"} key={item?.id}>
                <a className={"social-icon"} href={item?.url}>
                  <i className={item?.icon}></i>
                </a>
              </li>
            ))}
          </ul>
          <p className={"copyright"}>Copyright &copy; GOINDIA.DIGITAL {date}</p>
        </Container>
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
