import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contactUs.css";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function ContactUs() {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className={"contact-us-card"}>
        <h3 className={"mb-2 mt-3"}> {"Contact Us"} </h3>
        {contactDetail?.map((item) => (
          <p key={item?.id}>
            <strong>
              <FontAwesomeIcon size={"lg"} icon={item?.icon} />
            </strong>
            <span> {item?.title} </span>
          </p>
        ))}
      </div>
    </Col>
  );
}
const contactDetail = [
  {
    id: 1,
    title: "Info@yourcompany.com",
    icon: faEnvelope,
  },
  {
    id: 2,
    title: "+91 839 328 8293",
    icon: faAddressBook,
  },
];
export default ContactUs;
