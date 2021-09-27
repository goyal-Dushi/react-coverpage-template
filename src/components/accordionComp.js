import {
  Accordion,
  AccordionCollapse,
  AccordionToggle,
  Card,
} from "react-bootstrap";

function AccordionComp(props) {
  return (
    <Accordion>
      {props?.content.map((item, i) => (
        <Card bg={"light"} className={"mt-2"}>
          <AccordionToggle as={Card.Header} eventKey={JSON.stringify(i)}>
            {item?.title}
          </AccordionToggle>
          <AccordionCollapse eventKey={JSON.stringify(i)}>
            <Card.Body> {item?.content} </Card.Body>
          </AccordionCollapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default AccordionComp;
