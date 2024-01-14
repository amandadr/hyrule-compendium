import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../App";
import "../styles/Modal.scss";

const EntryDetails = ({ data }) => {
  const { open, handleClose } = useContext(ModalContext);

  let {
    category,
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

  const renderTypography = (label, value) => {
    if (Array.isArray(value) && value[0]) {
      return (
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, marginRight: 2, flex: "2" }}
          className="box"
        >
          <Typography className="label">{label}:</Typography>
          <Typography className="value">
            {Array.isArray(value[0])
              ? value.map(([itemLabel, itemValue]) => (
                  <>
                    {itemLabel}: {itemValue}
                    <br />
                  </>
                ))
              : value.length > 5
              ? value.join(", ")
              : value.map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
          </Typography>
        </Typography>
      );
    } else if (value === true) {
      return (
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, marginRight: 2, flex: ".5" }}
          className="box"
        >
          <Typography className="label">{label}:</Typography>
          <Typography className="value">{value ? "Yes" : "No"}</Typography>
        </Typography>
      );
    } else if (value) {
      return (
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, marginRight: 2, flex: "1" }}
          className="box"
        >
          <Typography className="label">{label}:</Typography>
          <Typography className="value">
            {value.length === 0 ? <>None</> : value}
          </Typography>
        </Typography>
      );
    }
    return null;
  };

  // Style the modal using MUI

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="container"
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
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontSize: "14px" }}
          className="description"
        >
          {description}
        </Typography>
        <br />
        <Box className="col">
          {renderTypography("Common Locations", common_locations)}
          {renderTypography("DLC", dlc)}
          {/* {renderTypography("Category", category)} */}
          {renderTypography("Edible", edible)}
          {renderTypography("Hearts", hearts_recovered)}
          {renderTypography("Cooking Effect", cooking_effect)}
          {renderTypography("Drops", drops)}
          {renderTypography("Stats", properties)}
        </Box>
      </Box>
    </Modal>
  );
};

export default EntryDetails;
