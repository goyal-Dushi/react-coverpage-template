import BrandContent from "../components/brandContent";
import { Col, Container, Image, Row } from "react-bootstrap";

function HeaderSection() {
  return (
    <Container
      style={{ height: "100vh" }}
      id={"#home"}
      className={"d-flex flex-column justify-content-center fluid"}>
      <Row>
        <Col
          className={"d-flex align-items-center justify-content-center"}
          lg={6}
          md={6}
          sm={12}>
          <Image roundedCircle fluid src={"/assets/images/dklp.webp"} />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <BrandContent />
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderSection;
