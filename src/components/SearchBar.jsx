import React, { useState } from "react";
import useSearchData from "../hooks/useSearchData";
import ListEntry from "./ListEntry";
import "../styles/Search.scss";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error, fetchData } = useSearchData();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Execute a function when the user presses a key on the keyboard
    const input = document.getElementById("search-input");
    input.addEventListener("keypress", function (event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("search-button").click();
      }
    });
  };

  const handleSearchClick = () => {
    // Only fetch if there's a non-empty query
    if (searchQuery.trim() !== "") {
      fetchData(searchQuery);
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search by name or ID..."
          className="search-input"
        />
        <button
          onClick={handleSearchClick}
          className="search-button"
          id="search-button"
        >
          Search
        </button>
      </div>
      <div className="search-results">
        {isLoading && <div>Loading...</div>}

        {error && !isLoading && <div>We couldn't find that in Hyrule!</div>}

        {data && !error && !isLoading && (
          <ListEntry
            data={data}
            className="search-item"
            subinfo={data.id}
            key={data.id}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
