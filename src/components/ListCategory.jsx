import { Typography } from "@mui/material";
import "../styles/List.scss";
import { useState, useEffect } from "react";
import { ListContext } from "../App";
import Navigation from "./Navigation";
import ListContent from "./ListContent";

function ListCategory() {
  const [listState, setListState] = useState({ name: "", data: [] });
  const [listData, setListData] = useState([]); // State for the sorted list; helps rerender the list when the state changes

  // Media Query Setup
  const narrowScreenQuery = window.matchMedia("(max-width: 850px)");
  narrowScreenQuery.addEventListener("change", () => {
    // Re-render the list when the media query changes
    setListData(listState.data);
  });
  // Re-sort/filter listData whenever listState or allEntries change
  useEffect(() => {
    const processedData = listState.data.sort((a, b) => a.id - b.id);
    setListData(processedData);
  }, [listState, narrowScreenQuery.matches]);

  return (
    <ListContext.Provider value={{ listState, setListState }}>
      <Navigation />
      <Typography className="list-title" variant="h2" align="center">
        {listState.name}
      </Typography>
      <div className="list-container">
        <ListContent
          listData={listData}
          listState={listState}
          isNarrow={narrowScreenQuery.matches}
          key={listState.data.length}
        />
      </div>
    </ListContext.Provider>
  );
}

export default ListCategory;
