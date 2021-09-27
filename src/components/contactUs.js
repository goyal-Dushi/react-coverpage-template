import { Col } from "react-bootstrap";
import "./contactUs.css";

function ContactUs() {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className={"contact-us-card"}>
        <h3 className={"mb-2 mt-3"}> {"Contact Us"} </h3>
        {contactDetail?.map((item) => (
          <p>
            {item?.href ? (
              <a href={item?.href}>
                <strong>
                  <i className={item?.icon} aria-hidden='true'></i>
                </strong>
                &nbsp; &nbsp; {item?.title}
                <br />
              </a>
            ) : (
              <>
                <strong>
                  <i className={item?.icon} aria-hidden='true'></i>
                </strong>
                &nbsp; &nbsp; {item?.title}
                <br />
              </>
            )}
          </p>
        ))}
      </div>
    </Col>
  );
}
const contactDetail = [
  {
    id: 1,
    title: "Info@goinida.digital",
    icon: "fa fa-envelope",
  },
  {
    id: 2,
    title: "+91 808 819 1336",
    icon: "fa fa-phone",
  },
  {
    id: 3,
    href: "https://wa.me/918088191336",
    title: "+91 808 819 1336",
    icon: "fa fa-whatsapp",
  },
];
export default ContactUs;
