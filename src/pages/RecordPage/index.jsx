import React, { useState } from 'react';
import { FormSelect } from '../../components/form';
import './styles.scss';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CardContent from '../../ui-kit/CardContent/CardContent';
import { Stack } from '@mui/system';

const options = [
  'Иванов Иван Иванович',
  'Петр Петров Петрович',
  'Гусь Гусев Гусевич',
];

const doctors = [
  {
    worskshop: 'Цех №24',
    descripstion: 'Врач терапевт',
    name: 'Иванов Иван Иванович',
    phone: 'Тел. 8-(999)-999-9999',
    mail: 'doctor@mail.ru',
  },
  {
    worskshop: 'Цех №3',
    descripstion: 'Врач Уролог',
    name: 'Луканов Игорь Иванович',
    phone: 'Тел. 8-(999)-999-9999',
    mail: 'doctor@mail.ru',
  },
  {
    worskshop: 'Цех №73',
    descripstion: 'Стоматолог',
    name: 'Трифанов Иван Иванович',
    phone: 'Тел. 8-(999)-999-9999',
    mail: 'doctor@mail.ru',
  },
];

const RecordPage = () => {
  const [formData, setFormData] = useState({
    therapist: '',
    date: null,
  });
  const handleChange = (newTherapist) => {
    setFormData((prev) => ({
      ...prev,
      therapist: newTherapist,
    }));
  };
  const handleDateChange = (newDate) => {
    console.log(newDate);
    setFormData((prev) => ({
      ...prev,
      date: newDate,
    }));
  };

  return (
    <div className="container">
      <div className="form-container">
        <FormSelect
          label="Терапевт"
          options={options}
          onChange={handleChange}
          value={formData.therapist}
        />
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
      <div className="doctors">
        {doctors.map((doctor) => (
          <CardContent>
            <h4 className="doctors__workshop">{doctor.worskshop}</h4>
            <p className="doctors__decription">{doctor.descripstion}</p>
            <p className="doctors__name">
              <PermIdentityOutlinedIcon />
              {doctor.name}
            </p>
            <p className="doctors__phone">
              <LocalPhoneOutlinedIcon />
              {doctor.phone}
            </p>
            <p className="doctors__mail">
              <EmailOutlinedIcon />
              {doctor.mail}
            </p>
          </CardContent>
        ))}
      </div>
    </div>
  );
};

export default RecordPage;
