import ListEntry from "./ListEntry";
import { List, Typography } from "@mui/material";
import "../styles/List.scss";
import { useState, useEffect } from "react";
import useAllData from "../hooks/useAllData";
import { ListContext } from "../App";
import Navigation from "./Navigation";
import ListContent from "./ListContent";

function Category() {
  const { allEntries } = useAllData();
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
  }, [listState, allEntries, narrowScreenQuery.matches]);

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
          allEntries={allEntries}
          isNarrow={narrowScreenQuery.matches}
        />
      </div>
    </ListContext.Provider>
  );
}

export default Category;
