import productData from "../data/product.content.json";
import { Col, Container, Row } from "react-bootstrap";
function Product() {
  return (
    <>
      {productData?.map((item, i) => (
        <Container className={"mt-5 mb-4"} key={i}>
          <h2 className='display-6' id={item?.id}>
            {item?.title}
          </h2>
          <h4 className='display-8'>{item?.subtitle}</h4>
          <Row className={"mt-5"}>
            <Col
              lg={5}
              md={12}
              sm={12}
              className={
                "align-self-center order-xs-first " +
                `${i % 2 !== 0 && "order-md-last"}`
              }
              data-scroll-reveal={"enter left move 30px over 0.6s after 0.4s"}>
              <img
                srcSet={item?.imageURL}
                width={"300px"}
                height={"300px"}
                className='rounded img-fluid d-block mx-auto'
                alt='App'
              />
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className={
                "align-self-center order-xs-last " +
                `${i % 2 !== 0 && "order-md-first"}`
              }>
              <p
                className={"mt-5"}
                style={{ fontSize: "17px", lineHeight: 1.8 }}>
                {item?.content}
              </p>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default Product;
