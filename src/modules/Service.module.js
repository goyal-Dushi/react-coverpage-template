import { Container, Row } from "react-bootstrap";
import ServiceCards from "../components/cards";

function ServiceSection() {
  return (
    <>
      <section className={"pt-3 pb-3 mt-4 mb-5"}>
        <Container>
          <h1 className={"display-3 mb-4 text-capitalize text-center"}>
            {"Our services & focus on"}
          </h1>
          <Row>
            <ServiceCards />
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ServiceSection;
