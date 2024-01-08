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
    columnCount: "2",
    alignItems: "space-between",
    overflow: "visible",
    width: "90%",
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

  return (
    <Box className={classes.box}>
      <h1>{title}</h1>
      <List className={classes.list}>
        {data.map((entry) => (
          <ListEntry data={entry} location={entry.common_locations && entry.common_locations[0]} className={classes.item} key={entry.id} />
        ))}
      </List>
    </Box>
  );
}

export default Category;
