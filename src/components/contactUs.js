function ContactUs() {
  return (
    <div className={"col-lg-4 col-md-6 col-sm-12"}>
      <div className={"contact-text"}>
        <h3 style={{ marginBottom: "15px" }}> {"Contact Us"} </h3>
        {contactDetail?.map((item) => (
          <p>
            {item?.href ? (
              <a href={item?.href}>
                <strong>
                  <i className={item?.icon} aria-hidden='true'></i>
                </strong>
                &nbsp; &nbsp; {item?.title}
                <br />
              </a>
            ) : (
              <>
                <strong>
                  <i className={item?.icon} aria-hidden='true'></i>
                </strong>
                &nbsp; &nbsp; {item?.title}
                <br />
              </>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
const contactDetail = [
  {
    id: 1,
    title: "Info@goinida.digital",
    icon: "fa fa-envelope",
  },
  {
    id: 2,
    title: "+91 808 819 1336",
    icon: "fa fa-phone",
  },
  {
    id: 3,
    href: "https://wa.me/918088191336",
    title: "+91 808 819 1336",
    icon: "fa fa-whatsapp",
  },
];
export default ContactUs;
