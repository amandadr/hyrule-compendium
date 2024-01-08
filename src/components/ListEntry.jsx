import React from "react";
import { ListItem, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "100px",
    height: "100px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textTransform: "capitalize",
  },
});

function ListEntry(props) {
  const { data, className } = props;
  const { id, name, image } = data;

  const classes = useStyles();

  // list the image, name, and id
  return (
    <ListItem key={id} className={className}>
      <Stack direction="row" spacing={2}>
        <img src={image} alt={name} className={classes.image} />
        <Stack direction="column" spacing={1} className={classes.text}>
          <Typography>{name}</Typography>
          <Typography>{id}</Typography>
        </Stack>
      </Stack>
    </ListItem>
  );
}

export default ListEntry;
