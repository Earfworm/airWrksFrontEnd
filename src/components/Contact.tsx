import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputContactInfo, setInputContactInfo] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  return (
    <form className="Contact">
      <label className="name">Name</label>
      <input type="text" id="name" name="name" value="" onChange={} />
      <label className="contact">Contact Info</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value="How would like to be contacted?"
        onChange={}
      />
      <label className="message">Leave a Message</label>
      <input type="text" id="message" name="message" value="" onChange={} />
    </form>
  );
};

export default Contact;
