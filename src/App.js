import logo from "./logo.svg";
import "./App.css";
import React, {useState, useEffect} from "react";
// import { fetchData } from "./helpers/fetchData";
import axios from "axios";

function App() {
  const monstersEndpoint =
    "http://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

  const [monsters, setMonsters] = useState([{}]);

  const fetchMonsters = async () => {
    const response = await axios.get(monstersEndpoint)
    .then((res) => {
      setMonsters(res.data.data);
    })
    .catch((error) => {
      console.error("Error fetching monsters:", error);
    });
    return response;
  };

  useEffect(() => {
    fetchMonsters();
  }, []);

  return (
    (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{monsters[0].name}</p>
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
    )
  );
}

export default App;
