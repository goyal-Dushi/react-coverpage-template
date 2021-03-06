import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function HelpSection() {
  return (
    <section className={"pt-3 mt-5 mb-5"} id='bman'>
      <Container className={"d-flex justify-content-between"}>
        <Row>
          <Col
            lg={6}
            md={12}
            sm={12}
            className={"align-self-center mobile-bottom-fix"}>
            <div className='left-heading'>
              <h2 className={"display-4"}>
                {" We can help you to grow your business"}
              </h2>
            </div>
            <div className={"text-left"}>
              <h4 className={"display-6"}> {"Business Management"} </h4>
              <p className={"mt-2"} style={{ lineHeight: "1.8" }}>
                {
                  "Dolor plaid slow-carb adipisicing eu hoodie godard jianbing skateboard fam vape letterpress. Irony mumblecore etsy, unicorn do echo park kickstarter yr hot chicken polaroid. Laboris occupy mlkshk shabby chic culpa hot chicken tumblr. 3 wolf mo."
                }
              </p>
              <ListGroup>
                {growList?.map((item, i) => (
                  <ListGroupItem style={{ listStyle: "none" }} key={i}>
                    <i className='fa fa-square' aria-hidden='true'></i> &nbsp;
                    {item?.content}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12} className={"align-self-center"}>
            <img
              data-scroll-reveal={"enter right move 30px over 0.6s after 0.4s"}
              src={"assets/images/grow.webp"}
              className={"rounded img-fluid d-block mx-auto"}
              alt={"grow-img"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
const growList = [
  {
    content: "Custom software Applications",
  },
  {
    content: "ERP Applications",
  },
  {
    content: "Web Applications - Static, Dynamic & E-commerce",
  },
  {
    content: "Search Engine Optimizatoin (SEO)",
  },
  {
    content: "Digital Marketing (Paid & Unpaid Promotions) ",
  },
];
export default HelpSection;
