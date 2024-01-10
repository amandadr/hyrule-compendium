import logo from "./logo.svg";
import "./App.css";
import React, {createContext} from "react";
import Category from "./components/Category";
import useFetchData from "./hooks/useFetchData";

export const listContext = createContext();

function App() {
  const { loading } = useFetchData();

  // make topic onclick set this list!!!

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading</div>}
        {!loading && (
          <Category />
        )}
      </header>
    </div>
  );
}

export default App;
