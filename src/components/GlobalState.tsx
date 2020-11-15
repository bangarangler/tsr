import React, { createContext, useReducer } from "react";

export const initValues = {
  rValue: true,
  turnOn: () => {},
  turnOff: () => {},
};

export const GlobalContext = createContext(initValues);

// type Action = {
//   type: "one" | "two" | "three";
// };

// can do Action like this if payload is changing
type Action =
  | { type: "one" }
  | { type: "two" }
  | { type: "three"; payload: "b" }
  | { type: "four"; payload: ["b"] };

// Types
// type State = {
//   rValue: boolean;
// };

// Interface
interface State {
  rValue: boolean;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "one":
      return {
        ...state,
        rValue: true,
      };
    case "two":
      return {
        ...state,
        rValue: false,
      };
    default:
      return state;
  }
  // return state;
};

// const initState = {
//   rValue: true,
// };

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValues);
  return (
    <GlobalContext.Provider
      value={{
        rValue: state.rValue,
        turnOn: () => dispatch({ type: "one" }),
        turnOff: () => dispatch({ type: "two" }),
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
