import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction("contacts/delete");

const filterContacts = createAction("contacts/filterContacts");

export default { addContact, deleteContact, filterContacts };

//redux

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

// const filterContacts = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });
