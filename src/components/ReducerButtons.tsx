import React, { useReducer } from "react";

const reducer = (state: any, action: any) => {
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
  }
};

const initState = {
  rValue: true,
};

const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      {state?.rValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
    </div>
  );
};

export default ReducerButtons;
