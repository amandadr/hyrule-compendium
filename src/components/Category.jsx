import ListEntry from "./ListEntry";
import { Box, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { listContext } from "../App";
import Navigation from "./Navigation";

const useStyles = makeStyles({
  item: {
    width: "100%",
    maxWidth: "50vw",
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
  const { allEntries } = useFetchData();

  const classes = useStyles();

  const [listState, setListState] = useState([]);

  useEffect(() => {
    setListState(allEntries);
  }, [allEntries]);

  const sortedData = listState.sort((a, b) => {
    return a.id - b.id;
  });

  const odd = sortedData.filter((e) => e.id % 2);
  const even = sortedData.filter((e) => !(e.id % 2));


  return (
    <listContext.Provider value={{ listState, setListState }}>
      <Navigation />
      <Box className={classes.box}>
        <h1>Entries</h1>
        <List className={classes.list}>
          <div className={classes.listDiv}>
            {odd.map((entry) => (
              <ListEntry
                data={entry}
                location={
                  listState === allEntries
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
                  listState === allEntries
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
    </listContext.Provider>
  );
}

export default Category;
