import React from "react";

import { TextField } from "@mui/material";

function FormInput({ onChange, value, label, disabled }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}

export default FormInput;
