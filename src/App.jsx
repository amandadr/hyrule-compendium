import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";
import Category from "./components/Category";
import useCategoryData from "./hooks/useCategoryData";
import SearchBar from "./components/SearchBar";

export const ListContext = createContext();

export const ModalContext = createContext();

function App() {
  const { loading } = useCategoryData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading...</div>}
      </header>
      <div className="App-body">
        <SearchBar />
        {!loading && <Category />}
      </div>
    </div>
  );
}

export default App;
