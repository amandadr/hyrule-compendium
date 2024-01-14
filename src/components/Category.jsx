import ListEntry from "./ListEntry";
import { Box, List, Typography } from "@mui/material";
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

  const createList = (list) => {
    return (
      <div className="list-div">
        {list.map((entry) => (
          <ListEntry
            data={entry}
            location={
              listState.name === allEntries.name
                ? entry.id
                : entry.common_locations && entry.common_locations[0]
            }
            className="list-item"
            key={entry.id}
          />
        ))}
      </div>
    );
  };

  const list1 = sortedData.filter((entry) => entry.id % 3 === 1);
  const list2 = sortedData.filter((entry) => entry.id % 3 === 2);
  const list3 = sortedData.filter((entry) => entry.id % 3 === 0);

  return (
    <ListContext.Provider value={{ listState, setListState }}>
      <Navigation />
      <Typography className="list-title" variant="h2" align="center">
        {listState.name}
      </Typography>
      <Box className="list-container">
        <List className="list">
          {createList(list1)}
          {createList(list2)}
          {createList(list3)}
        </List>
      </Box>
    </ListContext.Provider>
  );
}

export default Category;
