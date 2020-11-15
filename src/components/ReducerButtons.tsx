// import React, { useReducer, useRef, useContext } from "react";
import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { useClickOutside } from "./useClickOutside";
import { GlobalContext } from "./GlobalState";

const ReducerButtons = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue, turnOn, turnOff } = useContext(GlobalContext);
  useClickOutside(ref, () => {
    console.log("clicked outside");
  });
  return (
    <Wrapper ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
    </Wrapper>
  );
};

export default ReducerButtons;

const Wrapper = styled.div`
  background: red;
`;
