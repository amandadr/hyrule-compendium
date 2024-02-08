import React from "react";
import { ListItem, Stack, Typography } from "@mui/material";
import "../styles/List.scss";
import { ModalContext } from "../App";
import EntryDetails from "./EntryDetails";
import useModal from "../hooks/useModal";

import randomString from "../helpers/keyGenerator";

function ListEntry(props) {
  const { data, subinfo, className } = props;
  const { id, name, image } = data;

  const { open, handleOpen, handleClose } = useModal(ModalContext);

  // list the image, name, and first common_locations
  return (
    data && (
      <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
        <ListItem key={id} className={className} onClick={handleOpen}>
          <Stack direction="row" spacing={2} className="list-stack">
            <img src={image} alt={name} className="list-image" />
            <Stack direction="column" spacing={1} className="list-text">
              <Typography
                className="list-name"
                variant="h7"
                sx={{ fontFamily: "HyliaSerifBeta" }}
              >
                {name}
              </Typography>
              <Typography className="list-subinfo">{subinfo}</Typography>
            </Stack>
          </Stack>
        </ListItem>
        <EntryDetails data={data} key={randomString()} />
      </ModalContext.Provider>
    )
  );
}

export default ListEntry;
