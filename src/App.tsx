import React from "react";
import Head from "./components/Head";
import Button from "./components/Button";
import Input from "./components/Input";
import ReducerButtons from "./components/ReducerButtons";
import BigC from "./components/BigC";
import { GlobalProvider } from "./components/GlobalState";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Head title="Hello" isActive={false} />
        <BigC title="Class" />
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log(e);
          }}>
          Hello FC
        </Button>
        <Input />
        <ReducerButtons />
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
    </GlobalProvider>
  );
}

export default App;
