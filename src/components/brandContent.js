function BrandContent() {
  return (
    <div
      className={
        "d-flex flex-column justify-content-evenly align-items-center h-100 text-center"
      }>
      <h1 className={"display-1 text-uppercase"}> {"my company"} </h1>
      <h2 className={"display-4 text-capitalize"}>
        {"bringing people together"}
      </h2>
      <div className={"text-center"}>
        <h2 className={"display-6"}>{"The New Era Of"}</h2>
        <h4 className={"display-6"}>
          <span
            className={"txt-rotate text-capitalize"}
            data-period='1250'
            data-rotate='[ "technology services", "products", "digital innovation", "IT Consulting "]'></span>
        </h4>
        <h2 className={"display-6"}> {"Is Here"} </h2>
      </div>
    </div>
  );
}

export default BrandContent;
