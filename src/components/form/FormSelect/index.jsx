import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const FormSelect = ({ label, value, onChange, options }) => {
  const handleChangeValue = (e) => {
    if (onChange) onChange(e.target.value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={handleChangeValue}
      >
        {options.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
