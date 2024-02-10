import React from "react";
import useAllData from "../hooks/useAllData";
import ListEntry from "./ListEntry";
import { List } from "@mui/material";
import "../styles/List.scss";

import randomString from "../helpers/keyGenerator";

function ListContent(props) {
  const { listData, listState, isNarrow } = props;
  const { allEntries } = useAllData();

  function createLists(list) {
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
          id={list[i].id}
          key={randomString()}
        />
      );

      // Conditional column handling
      if (isNarrow) {
        // Create a new row for each item in narrow mode
        rows.push(
          <div className="list-row" key={randomString()}>
            {listItem}
          </div>
        );
      } else {
        // 3-column behavior for wider screens
        currentRow.push(listItem);
        if (currentRow.length === 3 || i === list.length - 1) {
          rows.push(
            <div className="list-row" key={randomString()}>
              {currentRow}
            </div>
          );
          currentRow = [];
        }
      }
    }

    return (
      <List className="list" key={randomString()}>
        {rows}
      </List>
    );
  }

  return createLists(listData);
}

export default ListContent;
