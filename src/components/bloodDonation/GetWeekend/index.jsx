import React, { useState } from "react";

import { Alert, Button, TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import "./styles.scss";

function GetWeekend() {
  const [value, setValue] = useState(dayjs(new Date()));
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleReceive = () => {
    setIsVisibleAlert(true);
    setTimeout(() => {
      setIsVisibleAlert(false);
    }, 3000);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Выберите день"
          inputFormat="MM.DD.YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div className="get-weekend__apply">
        <Button onClick={handleReceive} variant="contained">
          Оформить
        </Button>
      </div>
      {isVisibleAlert && (
        <div className="get-weekend__alert">
          <Alert severity="success">Заявка отправлена</Alert>
        </div>
      )}
    </div>
  );
}

export default GetWeekend;
