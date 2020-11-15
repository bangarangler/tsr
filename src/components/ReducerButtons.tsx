import React, { useReducer, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

// type Action = {
//   type: "one" | "two" | "three";
// };

// can do Action like this if payload is changing
type Action =
  | { type: "one" }
  | { type: "two" }
  | { type: "three"; payload: "b" }
  | { type: "four"; payload: ["b"] };

type State = {
  rValue: boolean;
};

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

const initState = {
  rValue: true,
};

const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const ref = useRef<HTMLDivElement>(null!);
  useClickOutside(ref, () => {
    console.log("clicked outside");
  });
  return (
    <div ref={ref}>
      {state?.rValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
    </div>
  );
};

export default ReducerButtons;
