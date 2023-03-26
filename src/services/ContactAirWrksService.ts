import axios from "axios";
import ContactAirWrks from "../models/ContactAirWrks";

const baseUrl: string = process.env.REACT_APP_API_URL || "";

export const addNewContact = (
  newContact: ContactAirWrks
): Promise<ContactAirWrks> => {
  console.log(newContact);
  return axios
    .post(`http://localhost:4000/contactAirWrks`, newContact)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};
