import { Typography, Box } from "@mui/material";
import randomString from "./keyGenerator";

const renderTypography = (label, value) => {
  if (Array.isArray(value) && value[0]) {
    return (
      <Box
        id="modal-modal-description"
        sx={{ mt: 2, marginRight: 2, flex: "2" }}
        className="detail-box"
        key={randomString()}
      >
        <Typography className="label" key={randomString()}>
          {label}:
        </Typography>
        <Box className="value" key={randomString()}>
          {Array.isArray(value[0])
            ? value.map(([itemLabel, itemValue]) => (
                <Typography key={randomString()}>
                  {itemLabel}: {itemValue}
                  <br />
                </Typography>
              ))
            : value.length > 5
            ? value.join(", ")
            : value.map((item) => (
                <Typography key={randomString()}>
                  {item}
                  <br />
                </Typography>
              ))}
        </Box>
      </Box>
    );
  } else if (value === true) {
    return (
      <Box
        id="modal-modal-description"
        sx={{ mt: 2, marginRight: 2, flex: ".5" }}
        className="detail-box"
        key={randomString()}
      >
        <Typography className="label" key={randomString()}>
          {label}:
        </Typography>
        <Typography className="value" key={randomString()}>
          {value ? "Yes" : "No"}
        </Typography>
      </Box>
    );
  } else if (value) {
    return (
      <Box
        id="modal-modal-description"
        sx={{ mt: 2, marginRight: 2, flex: "1" }}
        className="detail-box"
        key={randomString()}
      >
        <Typography className="label" key={randomString()}>
          {label}:
        </Typography>
        <Typography className="value" key={randomString()}>
          {value.length === 0 ? <>None</> : value}
        </Typography>
      </Box>
    );
  }
  return null;
};

export default renderTypography;
