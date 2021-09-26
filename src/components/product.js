import productData from "../data/product.content.json";

function Product() {
  return (
    <>
      {productData?.map((item, i) => (
        <div className={"container"} key={i}>
          <h2 className='s-title' id={item?.id}>
            {item?.title}
          </h2>
          <h4 className='subheading'>{item?.subtitle}</h4>
          <div className={"row"}>
            <div
              className={
                "col-lg-5 col-md-12 col-sm-12 align-self-center " +
                `${i % 2 !== 0 && "order-last"}`
              }
              data-scroll-reveal={"enter left move 30px over 0.6s after 0.4s"}>
              <img
                srcSet={item?.imageURL}
                className='rounded img-fluid d-block mx-auto'
                alt='App'
              />
            </div>
            <div
              className={
                "col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix " +
                `${i % 2 !== 0 && "order-first"}`
              }>
              {item?.content}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
