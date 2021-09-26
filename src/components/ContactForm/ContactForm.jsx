import React from "react";
import { useState } from "react";

import { connect } from "react-redux";

import actions from "../../redux/actions";
import PropTypes from "prop-types";
import style from "./ContactForm.module.css";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <form className={style.ContactForm} onSubmit={handleSubmit}>
      <label className={style.label}>Name</label>
      <input
        className={style.input}
        value={name}
        onChange={handleInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className={style.label}>Number</label>
      <input
        className={style.input}
        value={number}
        onChange={handleInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

// redux

const mapDispatchToProrps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(actions.addContact(name, number)),
});
export default connect(null, mapDispatchToProrps)(ContactForm);
