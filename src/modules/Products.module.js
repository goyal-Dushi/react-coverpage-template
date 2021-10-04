import ProductDisplay from "../components/product";

function ProductsSection() {
  return (
    <section id={"products"} className={"text-center mt-5 mb-5"}>
      <h3 className={"display-3"}> {"Our Products"} </h3>
      <ProductDisplay />
    </section>
  );
}

export default ProductsSection;
