import ListEntry from "./ListEntry";
import { Box, List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import useAllData from "../hooks/useAllData";
import { ListContext } from "../App";
import Navigation from "./Navigation";

const useStyles = makeStyles({
  item: {
    maxWidth: "40vw",
    border: "1px solid black",
    borderRadius: "5px",
    marginBottom: "5px",
    backgroundColor: "#3e4451",
  },
  list: {
    display: "flex",
    flex: "wrap",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-evenly",
    overflow: "visible",
    width: "90%",
  },
  title: {
    color: "white",
    textTransform: "capitalize",
  },
  listDiv: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "40%",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function Category() {
  const { allEntries } = useAllData();

  const classes = useStyles();

  const [listState, setListState] = useState({ name: "", data: [] });

  const sortedData = listState.data.sort((a, b) => {
    return a.id - b.id;
  });

  const odd = sortedData.filter((e) => e.id % 2);
  const even = sortedData.filter((e) => !(e.id % 2));

  return (
    <ListContext.Provider value={{ listState, setListState }}>
      <Navigation />
      <Box className={classes.box}>
        <Typography
          className={classes.title}
          variant="h2"
          align="center"
          sx={{ fontFamily: "HyliaSerifBeta" }}
        >
          {listState.name}
        </Typography>
        <List className={classes.list}>
          <div className={classes.listDiv}>
            {odd.map((entry) => (
              <ListEntry
                data={entry}
                location={
                  listState.name === allEntries.name
                    ? entry.id
                    : entry.common_locations && entry.common_locations[0]
                }
                className={classes.item}
                key={entry.id}
              />
            ))}
          </div>
          <div className={classes.listDiv}>
            {even.map((entry) => (
              <ListEntry
                data={entry}
                location={
                  listState.name === allEntries.name
                    ? entry.id
                    : entry.common_locations && entry.common_locations[0]
                }
                className={classes.item}
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
