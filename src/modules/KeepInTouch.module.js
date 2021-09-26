import ContactUs from "../components/contactUs";
import MessageUs from "../components/messageUs";

function KeepInTouchSection() {
  return (
    <>
      <section id={"contactus"} className={"section colored"}>
        <div className={"container text-center"}>
          <h2 style={{ marginBottom: "20px" }}> {"Keep In Touch"} </h2>
          <div className={"row"}>
            <ContactUs />
            <MessageUs />
          </div>
        </div>
      </section>
    </>
  );
}

export default KeepInTouchSection;
