import ListEntry from "./ListEntry";
import { Box, List } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  item: {
    width: "40% !important",
    maxWidth: "50vw",
  },
  list: {
    columnCount: "2",
    gap: "0 30px",
    overflow: "visible",
    maxWidth: "90%",
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
          <ListEntry data={entry} className={classes.item} key={entry.id} />
        ))}
      </List>
    </Box>
  );
}

export default Category;
