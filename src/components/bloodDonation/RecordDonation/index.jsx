import React from "react";
import dayjs from "dayjs";

import { Button, TextField } from "@mui/material";
import {
  LocalizationProvider,
  MobileDatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./styles.scss";

function RecordDonation() {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="record-donation__content">
          <MobileDatePicker
            label="Выберите день"
            inputFormat="MM.DD.YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Выберите время"
            value={value}
            onChange={handleChange}
            ampm={false}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </LocalizationProvider>
      <div className="record-donation__apply">
        <Button variant="contained">Записаться</Button>
      </div>
    </div>
  );
}

export default RecordDonation;
