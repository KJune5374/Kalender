import { createStore } from 'redux';

// Define the initial state
const initialState = {
  image: ""
};

// Define the root reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_IMAGE":
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}

// Create the store using the root reducer
const store = createStore(rootReducer);

export default store;
