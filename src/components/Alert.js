import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={4} variant="filled" {...props} />;
};

export default Alert;
