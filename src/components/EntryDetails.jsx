import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../App";

const EntryDetails = ({ data }) => {
  const { open, handleClose } = useContext(ModalContext);

  const {
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

  const renderTypography = (label, value) => {
    if (value) {
      return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {label}: {value}
        </Typography>
      );
    }
    return null;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <img src={image} alt={name} style={{ width: "100px" }} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        {renderTypography("Category", category)}
        {renderTypography("Common Locations", common_locations)}
        {renderTypography("Cooking Effect", cooking_effect)}
        {renderTypography("DLC", dlc)}
        {renderTypography("Drops", drops)}
        {renderTypography("Edible", edible)}
        {renderTypography("Hearts Recovered", hearts_recovered)}
        {renderTypography("ID", id)}
        {renderTypography("Properties", properties)}
      </Box>
    </Modal>
  );
};

export default EntryDetails;
