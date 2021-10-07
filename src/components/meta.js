import { Helmet } from "react-helmet";

function Meta(props) {
  return (
    <Helmet>
      <meta name={"title"} content={props?.title} />
      <meta name={"description"} content={props?.description} />
    </Helmet>
  );
}

export default Meta;
