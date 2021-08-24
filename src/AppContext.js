import React, { createContext, useReducer } from "react";
import { BOOKS } from "./constants";

// Create context value that can be shared accross the application
// exposes a provider that we can use to wrap around all the components where we want this state accessible
export const AppContext = createContext();

// Reducer function and its initial state
const appStateReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  toRead: BOOKS,
  completed: [],
};

// in the provider, we want the function that can change the state passed in and the state itself
export function AppStateProvider({ children }) {
  // useReducer returns a tuple (state and dispatch) that we will call booksReducer
  let booksReducer = useReducer(appStateReducer, initialState);
  return (
    <AppContext.Provider value={booksReducer}>{children}</AppContext.Provider>
  );
}

/**
 * SUMMARY: To set up Context with Reducer:
 *  - Set up the reducer and the initial state
 *  - Create an AppContext with createContext
 *  - Create a function that returns the provider created by createContext and pass in the reducer as a value
 *  - Import this provider into the component you want wrapped in it (some high level component like App)
 *  - In any component where we want to access the reducer, we call useContext
 */
