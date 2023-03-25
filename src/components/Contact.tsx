import { FormEvent, useState } from "react";
import ContactAirWrks from "../models/ContactAirWrks";
import { addNewContact } from "../services/ContactAirWrksService";
import "./Contact.css";

interface propsObj {
  addContact: (nC: ContactAirWrks) => void;
}

const Contact = ({ addContact }: propsObj) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const submitHandler = (e: FormEvent) => {
    //prevent page refresh
    e.preventDefault();

    const inputContact: ContactAirWrks = {
      name: inputName,
      email: inputEmail,
      message: inputMessage,
    };
    addContact(inputContact);
    //clear form:
    setInputName("");
    setInputEmail("");
    setInputMessage("");
  };

  return (
    <form className="Contact" onSubmit={submitHandler}>
      <label className="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={inputName}
        placeholder="name"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <label className="contact">Email:</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value={inputEmail}
        placeholder="email"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
      />
      <label className="message">Leave a Message:</label>
      <textarea
        id="message"
        name="message"
        value={inputMessage}
        cols={30}
        rows={10}
        onChange={(e) => {
          setInputMessage(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default Contact;
