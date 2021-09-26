import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import actions from '../../redux/actions';

const ContactList = ({ contacts, onDelete }) => {

  return (
    <ul className={style.list}>
  {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.listItem}>
          <span className={style.listItemName}>{name}:</span>
          <span className={style.listItemNumber}>{number}</span>
          <button
            type="button"
            className={style.button}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  onClick: PropTypes.func.isRequired,
};


const visibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: visibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);