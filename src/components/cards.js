import { Col } from "react-bootstrap";
import serviceData from "../data/services.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import {
  faChartBar,
  faLightbulb,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";

const showIcon = (iconType) => {
  if (iconType === "bullseye") {
    return <FontAwesomeIcon size={"3x"} icon={faMoneyBill1} />;
  } else if (iconType === "chartbar") {
    return <FontAwesomeIcon size={"3x"} icon={faChartBar} />;
  } else if (iconType === "lightBulb") {
    return <FontAwesomeIcon size={"3x"} icon={faLightbulb} />;
  }
};

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
            <div className={"feature-icon"}>{showIcon(item?.icon)}</div>
            <h5 className={"features-title mt-3 mb-3"}> {item?.title} </h5>
            <p>{item?.content}</p>
          </div>
        </Col>
      ))}
    </>
  );
}

export default ServiceCards;
