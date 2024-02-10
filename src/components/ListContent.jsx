import React from "react";
import useAllData from "../hooks/useAllData";
import createLists from "../helpers/createLists";
import { List } from "@mui/material";
import "../styles/List.scss";

import randomString from "../helpers/keyGenerator";

function ListContent(props) {
  const { listData, listState, isNarrow } = props;
  const { allEntries, isLoading } = useAllData();

  const rows = createLists(listData, listState, isNarrow, allEntries);

  return (
    <List className="list" key={randomString()}>
      {isLoading && <div>Loading...</div>}
      {rows}
    </List>
  );
}

export default ListContent;
