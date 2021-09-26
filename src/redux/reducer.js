// redux-toolkit

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [payload, ...state];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// redux;

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       if (
//         state.find(
//           (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
//         )
//       ) {
//         alert(`${payload.name} is already in contacts`);

//       }
//     return [payload, ...state];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
