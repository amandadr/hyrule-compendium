import ListEntry from "./ListEntry";
import { List, Typography } from "@mui/material";
import "../styles/List.scss";
import { useState } from "react";
import useAllData from "../hooks/useAllData";
import { ListContext } from "../App";
import Navigation from "./Navigation";

function Category() {
  const { allEntries } = useAllData();

  const [listState, setListState] = useState({ name: "", data: [] });

  const sortedData = listState.data.sort((a, b) => {
    return a.id - b.id;
  });

  function createLists(list) {
    // Keep columnCount as before
    const columnCount = 3;

    // Media Query Setup
    const narrowScreenQuery = window.matchMedia("(max-width: 850px)");

    // Function to update layout based on media query
    function updateLayout() {
      const rows = [];
      let currentRow = [];

      for (let i = 0; i < list.length; i++) {
        const listItem = (
          <ListEntry
            data={list[i]}
            subinfo={
              listState.name === allEntries.name
                ? list[i].id
                : list[i].common_locations && list[i].common_locations[0]
            }
            className="list-item"
            key={list[i].id}
          />
        );

        // Conditional column handling
        if (narrowScreenQuery.matches) {
          // Create a new row for each item in narrow mode
          rows.push(<div className="list-row">{listItem}</div>);
        } else {
          // Original behavior for wider screens
          currentRow.push(listItem);
          if (currentRow.length === columnCount || i === list.length - 1) {
            rows.push(<div className="list-row">{currentRow}</div>);
            currentRow = [];
          }
        }
      }

      return <List className="list">{rows}</List>;
    }

    // Initial rendering call
    let listContent = updateLayout();

    // Add listener for media query changes
    narrowScreenQuery.addListener(updateLayout);

    // Return component (Note: You'll likely want to render 'listContent' within a React component instead of returning it directly)
    return listContent;
  }

  return (
    <ListContext.Provider value={{ listState, setListState }}>
      <Navigation />
      <Typography className="list-title" variant="h2" align="center">
        {listState.name}
      </Typography>
      <div className="list-container">{createLists(sortedData)}</div>
    </ListContext.Provider>
  );
}

export default Category;
