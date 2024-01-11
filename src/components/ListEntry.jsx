import React, { useEffect, createContext } from "react";
import { ListItem, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useModal from "../hooks/useModal";
import { ModalContext } from "../App";
import EntryDetails from "./EntryDetails";

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

  const { open, handleOpen, handleClose } = useModal();

  const classes = useStyles();

  // list the image, name, and first common_locations
  return (
    data && (
      <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
        <ListItem key={id} className={className} onClick={handleOpen}>
          <Stack direction="row" spacing={2} className={classes.stack}>
            <img src={image} alt={name} className={classes.image} />
            <Stack direction="column" spacing={1} className={classes.text}>
              <Typography className={classes.name}>{name}</Typography>
              <Typography>{location}</Typography>
            </Stack>
          </Stack>
        </ListItem>
        <EntryDetails data={data} />
      </ModalContext.Provider>
    )
  );
}

export default ListEntry;
