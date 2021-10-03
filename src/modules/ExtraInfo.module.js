import learningItem from "../data/extraInfo.content.json";
import {
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function ExtraInfoSection() {
  return (
    <section className={"pt-4 pb-4 mt-4 mb-5"} id='dk_learning'>
      <Container>
        <h2 className={"display-3 text-center"}>
          {"Explain More About What you care!"}
        </h2>
        <h4 className={"display-6 text-center mt-4 mb-3"}>
          {"Best Trainings offered by You"}
        </h4>
        <Row className={"mt-4 mb-3"}>
          <Col lg={5} md={12} sm={12} className={"align-self-center"}>
            <Image
              fluid
              src={"assets/images/dklp.webp"}
              className={"d-block mx-auto"}
              alt={"App"}
            />
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            className={"align-self-center mx-auto mt-3"}>
            <ListGroup variant={"flush"}>
              {learningItem?.map((item) => (
                <ListGroupItem key={item?.id} id={item?.id}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span> {item?.content} </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ExtraInfoSection;
