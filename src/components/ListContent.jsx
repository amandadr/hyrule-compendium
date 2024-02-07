import React from "react";
import ListEntry from "./ListEntry";
import { List } from "@mui/material";
import "../styles/List.scss";

function ListContent(props) {
  const { listData, listState, allEntries, isNarrow } = props;

  function createLists(list) {
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
        if (isNarrow) {
          // Create a new row for each item in narrow mode
          rows.push(<div className="list-row">{listItem}</div>);
        } else {
          // 3-column behavior for wider screens
          currentRow.push(listItem);
          if (currentRow.length === 3 || i === list.length - 1) {
            rows.push(<div className="list-row">{currentRow}</div>);
            currentRow = [];
          }
        }
      }

      return <List className="list">{rows}</List>;
    }

    // Initial rendering call
    let listContent = updateLayout();

    // Return component
    return listContent;
  }

  return createLists(listData);
}

export default ListContent;
