import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";
import Category from "./components/Category";
import useCategoryData from "./hooks/useCategoryData";

export const listContext = createContext();

function App() {
  const { loading } = useCategoryData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading</div>}
        {!loading && <Category />}
      </header>
    </div>
  );
}

export default App;
