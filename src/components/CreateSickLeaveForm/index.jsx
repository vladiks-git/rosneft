import React, {useState} from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

import "./styles.scss";
import { FormInput, FormSelect} from "../form";
import {TextField} from "@mui/material";

const initialFormData = {
  startDate: null,
  endDate: null,
  doctorFullName: "",
  reason: "",
  patientName: "Иванов Иван Иванович",
  birthDate: new Date("1980.12.12"),
  snils: "123-456-789 00"
}

const doctors = [
  "Иванов Иван Иванович",
  "Петр Петров Петрович",
  "Гусь Гусев Гусевич",
];

const CreateSickLeaveForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (value, key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value
    }))
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="sick-leave__form">
        <div className="form__section">
          <span>Сотрудник:</span>
          <FormInput
            label="ФИО"
            value={formData.patientName}
            onChange={(name) => handleChange(name, "patientName")}
            disabled
          />
          <MobileDatePicker
            label="Дата рождения"
            inputFormat="MM.DD.YYYY"
            value={formData.birthDate}
            disabled
            onChange={(date) => handleChange(date, "birthDate")}
            renderInput={(params) => <TextField {...params} />}
          />
          <FormInput
            label="СНИЛС"
            value={formData.snils}
            onChange={(snils) => handleChange(snils, "snils")}
            disabled
          />
        </div>
        <div className="form__section">
          <span>Освобождается от работы:</span>
          <FormInput
            label="Причина"
            value={formData.reason}
            onChange={(reason) => handleChange(reason, "reason")}
          />
          <MobileDatePicker
            label="Начиная с"
            inputFormat="MM.DD.YYYY"
            value={formData.startDate}
            onChange={(date) => handleChange(date, "startDate")}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Заканчивая"
            inputFormat="MM.DD.YYYY"
            value={formData.endDate}
            onChange={(date) => handleChange(date, "endDate")}
            renderInput={(params) => <TextField {...params} />}
          />
          <FormSelect
            label="ФИО врача"
            options={doctors}
            onChange={(doctor) => handleChange(doctor, "doctorFullName")}
            value={formData.doctorFullName}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CreateSickLeaveForm;
