import React from "react";

import { TextField } from "@mui/material";

function FormInput({ onChange, value, label }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
}

export default FormInput;
