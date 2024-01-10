import ListEntry from "./ListEntry";
import { Box, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";

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

function Category(props) {
  const { title, data } = props;

  const classes = useStyles();

  const sortedData = data.sort((a, b) => {
    return a.id - b.id;
  });

  const odd  = sortedData.filter((v) => v.id % 2)
  const even = sortedData.filter((v) => !(v.id % 2))

  console.log(sortedData)

  // location={entry.common_locations && entry.common_locations[0]}

  return (
    <Box className={classes.box}>
      <h1>{title}</h1>
      <List className={classes.list}>
        <div className={classes.listDiv}>
          {odd.map((entry) => (
            <ListEntry
              data={entry}
              location={entry.id}
              className={classes.item}
              key={entry.id}
            />
          ))}
        </div>
        <div className={classes.listDiv}>
          {even.map((entry) => (
            <ListEntry
              data={entry}
              location={entry.id}
              className={classes.item}
              key={entry.id}
            />
          ))}
        </div>
      </List>
    </Box>
  );
}

export default Category;
