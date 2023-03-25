import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import ContactAirWrks from "./models/ContactAirWrks";
import { addNewContact } from "./services/ContactAirWrksService";

function App() {
  // const [newContact, setNewContact] = useState<ContactAirWrks>;
  // useEffect(() => {

  // }, []);
  // const addNewContact = (newContact: ContactAirWrks): void => {

  //   //  spread operator - copies all obj's from prev into new array
  //   setContact((prev) => [...prev, newContact]);
  // };
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact addContact={addNewContact} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
