





// redux

import { createStore, combineReducers } from 'redux';
import contactsReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;