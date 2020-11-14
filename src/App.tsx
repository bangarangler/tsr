import React from "react";
import Head from "./components/Head";
import Button from "./components/Button";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Head title="Hello" isActive={false} />
      <Button
        onClick={(value) => {
          console.log(value);
        }}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          write <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
