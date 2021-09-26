// redux-toolkit

import types from "./types"
import { combineReducers } from 'redux';

// redux;

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (
        state.find(
          (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
        )
      ) {
        alert(`${payload.name} is already in contacts`);
        
      }
    return [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
