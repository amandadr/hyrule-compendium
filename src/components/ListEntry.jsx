import React, { useEffect } from "react";
import { ListItem, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  stack: {
    width: "100%",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textTransform: "capitalize",
    width: "100%",
  },
  name: {
    fontWeight: "700 !important",
    fontSize: "1.2rem !important",
  },
});

function ListEntry(props) {
  const { data, location, className } = props;
  const { id, name, image } = data;

  const classes = useStyles();

  // list the image, name, and first common_locations
  return data && (
    <ListItem key={id} className={className}>
      <Stack direction="row" spacing={2} className={classes.stack}>
        <img src={image} alt={name} className={classes.image} />
        <Stack direction="column" spacing={1} className={classes.text}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography>{location}</Typography>
        </Stack>
      </Stack>
    </ListItem>
  );
}

export default ListEntry;
