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

  const odd = sortedData.filter((e) => e.id % 2);
  const even = sortedData.filter((e) => !(e.id % 2));

  return (
    <ListContext.Provider value={{ listState, setListState }}>
      <Navigation />
      <Box className="list-container">
        <Typography className="list-title" variant="h2" align="center">
          {listState.name}
        </Typography>
        <List className="list">
          <div className="list-div">
            {odd.map((entry) => (
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
          <div className="list-div">
            {even.map((entry) => (
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
        </List>
      </Box>
    </ListContext.Provider>
  );
}

export default Category;
