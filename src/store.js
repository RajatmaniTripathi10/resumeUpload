// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your rootReducer

const store = createStore(rootReducer);

export default store;
