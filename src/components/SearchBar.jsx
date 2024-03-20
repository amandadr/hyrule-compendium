import React, { useEffect, useState } from "react";
import useSearchData from "../hooks/useSearchData";
import ListEntry from "./ListEntry";
import "../styles/Search.scss";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error, fetchData } = useSearchData();

  const input = document.getElementById("search-input");
  const handleSearchInputChange = (inputEvent) => {
    input.addEventListener("keypress", function (event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        event.preventDefault();
        // Set the state to the value of the input element and
        setSearchQuery(inputEvent.target.value);
        // Trigger the button element with a click
        document.getElementById("search-button").click();
      }
    });
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          id="search-input"
          type="text"
          onChange={handleSearchInputChange}
          placeholder="Search by name or ID..."
          className="search-input"
        />
        <button
          onClick={useEffect(() => {
            if (searchQuery.trim() !== "") {
              fetchData(searchQuery);
            }
          }, [searchQuery])}
          className="search-button"
          id="search-button"
        >
          Search
        </button>
      </div>
      <div className="search-results-container">
        {isLoading && <div>Loading...</div>}

        {error && !isLoading && <div>We couldn't find that in Hyrule!</div>}

        {data.length > 0 && !error && !isLoading && (
          <div className="search-results">
            {data.map((data) => (
              <ListEntry
                data={data.data}
                className="search-item"
                subinfo={data.data.id}
                key={data.data.id}
              />
            ))}
          </div>
        )}
        {data.length > 0 &&
          !error &&
          !isLoading &&
          `${data.length} results found.`}
      </div>
    </div>
  );
}

export default SearchBar;
