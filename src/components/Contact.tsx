import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputContactInfo, setInputContactInfo] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  return (
    <form className="Contact">
      <label className="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value=""
        placeholder="name"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <label className="contact">Contact Info:</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value={inputContactInfo}
        placeholder="email"
        onChange={(e) => {
          setInputContactInfo(e.target.value);
        }}
      />
      <label className="message">Leave a Message:</label>
      <textarea
        id="message"
        name="message"
        value={inputMessage}
        onChange={(e) => {
          setInputMessage(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default Contact;
