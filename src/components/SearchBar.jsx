import React, { useState } from "react";
import useSearchData from "../hooks/useSearchData";
import ListEntry from "./ListEntry";

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
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearchClick}>Search</button>

      {isLoading && <div>Loading...</div>}

      {error &&
        !isLoading && ( // Display error, hide default 'not found'
          <div>We couldn't find that in Hyrule!</div>
        )}

      {data && !error && !isLoading && (
        <ListEntry data={data} classname="search-item" key={data.id} />
      )}
    </div>
  );
}

export default SearchBar;
