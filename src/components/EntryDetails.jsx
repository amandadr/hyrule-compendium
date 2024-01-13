import { useContext } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../App";
import { common } from "@mui/material/colors";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    overflow: "visible",
    maxHeight: "85vh",
  },
  col: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  box: {
    flex: "1",
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    overflow: "auto",
    padding: "5px",
    maxWidth: "70%",
    textTransform: "capitalize",
  },
}));

const EntryDetails = ({ data }) => {
  const { open, handleClose } = useContext(ModalContext);

  const classes = useStyles();

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
    let width = label.length * 12;

    if (Array.isArray(value) && value[0]) {
      return (
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, marginRight: 2, width: `${width}px`, flex: "40%" }}
          className={classes.box}
        >
          {label}:
          <br />
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
      );
    } else if (value === true) {
      return (
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, marginRight: 2, width: `${width}px`, flex: "40%" }}
          className={classes.box}
        >
          {label}: <br />
          {value ? "Yes" : "No"}
        </Typography>
      );
    } else if (value) {
      return (
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, marginRight: 2, width: `${width}px`, flex: "25%" }}
          className={classes.box}
        >
          {label}:
          {value === id ? (
            ` ${value}`
          ) : value.length === 0 ? (
            <>
              <br />
              None
            </>
          ) : (
            value && (
              <>
                <br />
                {typeof value === "string" ? value : value}
              </>
            )
          )}
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
        className={classes.modal}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          mb={2}
          sx={{
            color: common.black,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Typography>
        <img src={image} alt={name} style={{ width: "150px" }} />
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontSize: "12px" }}
        >
          {description}
        </Typography>
        <br />
        <Box className={classes.col}>
          {renderTypography("Common Locations", common_locations)}
          {renderTypography("ID", id)}
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
