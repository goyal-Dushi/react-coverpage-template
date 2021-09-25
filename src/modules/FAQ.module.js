import Faq from "react-faq-component";
import genData from "../data/faq.content.json";

function FAQdisplay() {
  return (
    <section className='section colored-1' id='faq'>
      <div className='container'>
        <Faq className='faq-row' data={genData} />
      </div>
    </section>
  );
}

export default FAQdisplay;
