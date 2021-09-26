import React from "react";
import style from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import PropTypes from "prop-types";

export default function App() {
  return (
    <>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 className={style.title}>Contacts</h2>
      <ContactList />
    </>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
