import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Category from "./components/Category";
import useFetchData from "./hooks/useFetchData";

function App() {
  const { monsters, loading } = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading</div>}
        {!loading && (
          <Category title="Monsters" data={monsters} key="monsters" />
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
