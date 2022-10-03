import React, {useState} from "react";
import {FormSelect} from "../../ui-kit";
import "./styles.scss";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {TextField} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

const options = [
  "Иванов Иван Иванович",
  "Петр Петров Петрович",
  "Гусь Гусев Гусевич",
]

const RecordPage = () => {
  const [formData, setFormData] = useState({
    therapist: "",
    date: null,
  })
  const handleChange = (newTherapist) => {
    setFormData((prev) => ({
      ...prev,
      therapist: newTherapist
    }))
  }
  const handleDateChange = (newDate) => {
    console.log(newDate);
    setFormData((prev) => ({
      ...prev,
      date: newDate
    }))
  }

  return (
    <div className="container">
      <div className="form-container">
        <FormSelect label="Терапевт" options={options} onChange={handleChange} value={formData.therapist} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Дата приема"
            inputFormat="mm.dd.yyyy hh:mm"
            value={formData.date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default RecordPage;
