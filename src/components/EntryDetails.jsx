import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../App";
import "../styles/Modal.scss";

import randomString from "../helpers/keyGenerator";
import renderTypography from "../helpers/renderEntryTypography";

const EntryDetails = ({ data }) => {
  const { open, handleClose } = useContext(ModalContext);

  let {
    common_locations,
    cooking_effect,
    description,
    dlc,
    drops,
    edible,
    hearts_recovered,
    id,
    image,
    name,
    properties,
  } = data;

  // turn properties into an array
  if (properties) {
    properties = Object.entries(properties);
  }

  // use an object to organize the rendering of data in modal-details
  const organizeTypography = () => {
    // to be mapped with renderTypography: [label, value]
    const details = {
      "Common Locations": common_locations,
      DLC: dlc,
      Edible: edible,
      "Hearts Recovered": hearts_recovered,
      "Cooking Effect": cooking_effect,
      Drops: drops,
      Stats: properties,
    };
    return details;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="container"
      key={randomString()}
    >
      <Box className="modal">
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          mb={0.5}
          className="title"
          sx={{ fontFamily: "HyliaSerifBeta" }}
        >
          {name}
        </Typography>
        <Typography id="modal-modal-id" sx={{ mb: 1 }}>
          {id}
        </Typography>
        <img
          src={image}
          alt={name}
          style={{ width: "150px" }}
          className="image"
        />
        <Typography id="modal-modal-description" className="description">
          {description}
        </Typography>
        <br />
        <Box className="modal-details">
          {Object.entries(organizeTypography()).map(([label, value]) => {
            return renderTypography(label, value);
          })}
        </Box>
      </Box>
    </Modal>
  );
};

export default EntryDetails;
