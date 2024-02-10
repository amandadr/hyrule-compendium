import React from "react";
import ListEntry from "../components/ListEntry";

import randomString from "./keyGenerator";

function createLists(data, list, isNarrow, allEntries) {
  const rows = [];
  let currentRow = [];

  for (let i = 0; i < data.length; i++) {
    const listItem = (
      <ListEntry
        data={data[i]}
        subinfo={
          list.name === allEntries.name
            ? data[i].id // Use the id as the subinfo for the main list
            : data[i].common_locations && data[i].common_locations[0] // Use the first common location as the subinfo for others
        }
        className="list-item"
        id={data[i].id}
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
      // If the row is full or we're at the end of the data list, push the row and reset it
      if (currentRow.length === 3 || i === data.length - 1) {
        rows.push(
          <div className="list-row" key={randomString()}>
            {currentRow}
          </div>
        );
        currentRow = []; // Reset the row
      }
    }
  }

  return rows; //For ListContent.jsx
}

export default createLists;
