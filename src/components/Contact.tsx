import { FormEvent, useState } from "react";
import ContactAirWrks from "../models/ContactAirWrks";
import { addNewContact } from "../services/ContactAirWrksService";
import "./Contact.css";

interface Props {
  addContact: (contact: ContactAirWrks) => void;
}

const Contact = ({ addContact }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const contact: ContactAirWrks = {
      name,
      email,
      message,
    };

    try {
      const newContact = await addNewContact(contact);
      addContact(newContact);
      setName("");
      setEmail("");
      setMessage("");
      setError("");
    } catch (error) {
      setError("Error saving contact");
    }
  };

  return (
    <form className="Contact" onSubmit={submitHandler}>
      {error && <div className="error">{error}</div>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="message">Leave a Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        cols={30}
        rows={10}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
