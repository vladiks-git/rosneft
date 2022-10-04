import React, { useState } from "react";
import dayjs from "dayjs";

import { Alert, Button, TextField } from "@mui/material";
import {
  LocalizationProvider,
  MobileDatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./styles.scss";

function RecordDonation() {
  const [date, setDate] = React.useState(dayjs(new Date()));
  const [time, setTime] = React.useState(dayjs(new Date()));
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);console.log();

  const handleChangeDate = (newDate) => {
    setDate(newDate);
  };

  const handleChangeTime = (newTime) => {
    setTime(newTime);
  };

  const handleRecord = () => {
    setIsVisibleAlert(true);
    setTimeout(() => {
      setIsVisibleAlert(false);
    }, 3000);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="record-donation__content">
          <MobileDatePicker
            label="Выберите день"
            inputFormat="MM.DD.YYYY"
            value={date}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Выберите время"
            value={time}
            onChange={handleChangeTime}
            ampm={false}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </LocalizationProvider>
      <div className="record-donation__record">
        <Button onClick={handleRecord} variant="contained">
          Записаться
        </Button>
      </div>
      {isVisibleAlert && (
        <div className="record-donation__alert">
          <Alert severity="success">Заявка отправлена</Alert>
        </div>
      )}
    </div>
  );
}

export default RecordDonation;
