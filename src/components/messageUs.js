import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import "./messageUs.css";

function MessageUs() {
  return (
    <div className={"col-lg-8 col-md-6 col-sm-12"}>
      <div className={"message-us-card"}>
        <h3 className={"mb-3 mt-2"}> {"Message Us"} </h3>
        <Form id={"contact"}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <FormGroup>
                <FormControl
                  type={"text"}
                  name={"name"}
                  id={"name"}
                  required
                  autoComplete={"off"}
                  // value={""}
                  placeholder={"Full Name"}
                />
              </FormGroup>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <FormGroup>
                <FormControl
                  type={"email"}
                  name={"email"}
                  id={"email"}
                  autoComplete={"off"}
                  // value={""}
                  required
                  placeholder={"Email Address"}
                />
              </FormGroup>
            </Col>
            <Col lg={12}>
              <FormGroup>
                <FormControl
                  as={"textarea"}
                  rows={6}
                  autoComplete={"off"}
                  // value={""}
                  placeholder={"Your Message"}
                  required
                />
              </FormGroup>
            </Col>
            <Col lg={12}>
              <Button variant={"primary"} type={"submit"}>
                {"Send Message"}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default MessageUs;
