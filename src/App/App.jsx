import React from "react";
import ContactForm from "../components/InputForm/ContactForm";
import "./App.css";

const App = (props) => {
  return (
    <React.Fragment>
      <section id="form">
        <ContactForm />
      </section>
    </React.Fragment>
  );
};

export default App;
