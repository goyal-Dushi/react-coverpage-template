import { Col } from "react-bootstrap";
import serviceData from "../data/services.json";
import "./cards.css";

function ServiceCards() {
  return (
    <>
      {serviceData?.map((item) => (
        <Col
          lg={4}
          md={6}
          sm={6}
          key={item?.id}
          className={"col-12 mt-3"}
          data-scroll-reveal={"enter bottom move 50px over 0.6s after 0.6s"}>
          <div className={"features-card p-4"}>
            <div className={"feature-icon"}>
              <i className={item?.icon} aria-hidden='true'></i>
            </div>
            <h5 className={"features-title mt-3 mb-3"}> {item?.title} </h5>
            <p>{item?.content}</p>
          </div>
        </Col>
      ))}
    </>
  );
}

export default ServiceCards;
