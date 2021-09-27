import learningItem from "../data/digiLearning.content.json";
import {
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

function DigiLearningSection() {
  return (
    <section className={"pt-4 pb-4 mt-4 mb-5"} id='dk_learning'>
      <Container>
        <h2 className={"display-3 text-center"}> {"DIGI KAAGAZ Learning"} </h2>
        <h4 className={"display-6 text-center mt-4 mb-3"}>
          {"Best Trainings offered by DIGI KAAGAZ Learning"}
        </h4>
        <Row className={"mt-4 mb-3"}>
          <Col lg={5} md={12} sm={12} className={"align-self-center"}>
            <Image
              fluid
              src={"assets/images/dklp.png"}
              className={"d-block mx-auto"}
              alt={"App"}
            />
          </Col>
          <Col lg={6} md={12} sm={12} className={"align-self-center mx-auto"}>
            <ListGroup variant={"flush"}>
              {learningItem?.map((item) => (
                <ListGroupItem id={item?.id}>
                  <i className='fa fa-certificate' aria-hidden='true'></i>{" "}
                  &nbsp;{item?.content}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Image
        fluid
        src={"assets/images/glmodule.png"}
        className={"d-block mx-auto"}
        alt={"explaing-img"}
      />
    </section>
  );
}

export default DigiLearningSection;
