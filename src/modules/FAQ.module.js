import genData from "../data/faq.content.json";
import AccordionComp from "../components/accordionComp";

function FAQdisplay() {
  return (
    <section className='section colored-1' id='faq'>
      <div className='container'>
        <h2 className={"display-4"}> {"FAQ"} </h2>
        <AccordionComp content={genData} />
      </div>
    </section>
  );
}

export default FAQdisplay;
