import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import useFetchData from "./hooks/useFetchData";

function App() {
  const { monsters, loading } = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <h1>Monsters</h1>
            {monsters.map((monster) => {
              return <div key={monster.id}>{monster.name}</div>;
            })}
          </div>
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
