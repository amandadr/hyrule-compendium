import { Typography } from "@mui/material";
import randomString from "./keyGenerator";

const renderTypography = (label, value) => {
  if (Array.isArray(value) && value[0]) {
    return (
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2, marginRight: 2, flex: "2" }}
        className="detail-box"
        key={randomString()}
      >
        <Typography className="label" key={randomString()}>
          {label}:
        </Typography>
        <Typography className="value" key={randomString()}>
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
        className="detail-box"
        key={randomString()}
      >
        <Typography className="label" key={randomString()}>
          {label}:
        </Typography>
        <Typography className="value" key={randomString()}>
          {value ? "Yes" : "No"}
        </Typography>
      </Typography>
    );
  } else if (value) {
    return (
      <Typography
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
      </Typography>
    );
  }
  return null;
};

export default renderTypography;
