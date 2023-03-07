import "./Contact.css";

const Contact = () => {
  return (
    <form className="Contact">
      <label className="name">Name</label>
      <input type="text" id="name" name="name" value="" />
      <label className="contact">Contact Info</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value="How would like to be contacted?"
      />
      <label className="message">Leave a Message</label>
      <input type="text" id="message" name="message" value="" />
    </form>
  );
};

export default Contact;
