import React from "react";
import "./bottomNav.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
                  <FontAwesomeIcon size={"lg"} icon={item?.icon} />
                </a>
              </li>
            ))}
          </ul>
          <p className={"copyright"}>
            Copyright <FontAwesomeIcon icon={faCopyright} /> Your Company {date}
          </p>
        </Container>
      </footer>
    </>
  );
}
const navItems = [
  {
    id: 1,
    icon: faFacebook,
    url: "www.facebook.com",
  },
  {
    id: 2,
    icon: faTwitter,
    url: "www.twitter.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "www.linkedin.com",
  },
];
export default BottomNav;
