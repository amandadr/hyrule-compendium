import React, { useState } from "react";
import useSearchData from "../hooks/useSearchData";
import ListEntry from "./ListEntry";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useSearchData(searchQuery);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
      />

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
