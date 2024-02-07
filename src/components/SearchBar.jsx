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
    if (searchQuery.trim() !== "") {
      // Only fetch if there's a non-empty query
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

      {error && <div>Error: {error.message}</div>}

      {data && <ListEntry data={data} className="list-item" key={data.id} />}

      {!isLoading && !error && !data && (
        <div>We couldn't find that in Hyrule!</div>
      )}
    </div>
  );
}

export default SearchBar;
