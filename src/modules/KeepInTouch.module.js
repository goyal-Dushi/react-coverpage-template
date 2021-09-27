import ContactUs from "../components/contactUs";
import "./keepInTouch.css";
import MessageUs from "../components/messageUs";
import { Container, Row } from "react-bootstrap";

function KeepInTouchSection() {
  return (
    <>
      <section className={"pt-4 pb-5 pr-3 pl-3"} id={"contactus"}>
        <Container className={"text-center"}>
          <h2 className={"mb-4 display-3"}> {"Keep In Touch"} </h2>
          <Row>
            <ContactUs />
            <MessageUs />
          </Row>
        </Container>
      </section>
    </>
  );
}

export default KeepInTouchSection;
