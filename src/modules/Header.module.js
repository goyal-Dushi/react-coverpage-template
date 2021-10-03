import BrandContent from "../components/brandContent";
import { Col, Container, Image, Row } from "react-bootstrap";

function HeaderSection() {
  return (
    <Container id={"#home"} className={"mt-5 mb-5 fluid"}>
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
