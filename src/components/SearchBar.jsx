import React, { useState } from "react";
import useSearchData from "../hooks/useSearchData";
import ListEntry from "./ListEntry";
import "../styles/Search.scss";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error, fetchData } = useSearchData();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    // Only fetch if there's a non-empty query
    if (searchQuery.trim() !== "") {
      fetchData(searchQuery);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearchClick} className="search-button">
        Search
      </button>

      <div className="search-results">
        {isLoading && <div>Loading...</div>}

        {error && !isLoading && <div>We couldn't find that in Hyrule!</div>}

        {data && !error && !isLoading && (
          <ListEntry data={data} className="search-item" key={data.id} />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
