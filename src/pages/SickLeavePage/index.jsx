import React, {useState} from "react";
import {CreateSickLeaveForm, Dialog, SickLeaveCard} from "../../components";

import "./styles.scss";
import {Alert, Button} from "@mui/material";

const sickLeaves = [
  {
    id: 1,
    patientName: "Иванов Иван Иванович",
    patientDob: "10.10.1990",
    patientSnils: "123-456-789 00",
    period: "10.09.2022 - 19.09.2022",
    doctorName: "Петр Петров Петрович",
    reason: "Растяжение мышц",
    date: "09.09.2022",
  },
  {
    id: 2,
    patientName: "Иванов Иван Иванович2",
    patientDob: "20.80.1990",
    patientSnils: "123-456-789 00",
    period: "10.09.2062 - 19.09.2022",
    doctorName: "Петр Петров Петрович",
    reason: "Растяжение мышц",
    date: "09.09.2022",
  },
  {
    id: 3,
    patientName: "Иванов Иван Иванович3",
    patientDob: "10.10.1950",
    patientSnils: "123-456-789 00",
    period: "10.09.2022 - 19.09.2022",
    doctorName: "Петр Петров Петрович",
    reason: "Растяжение мышц",
    date: "09.09.2022",
  },
];

const SickLeavePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleSaveSickLeave = () => {
    setIsVisibleAlert(true);
    handleCloseModal();
    setTimeout(() => {
      setIsVisibleAlert(false);
    }, 3000)
  }

  const getRandomNumber = () => Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  return (
      <div className="container">
        <Button
          variant="filled"
          className="leave-card__create-btn"
          onClick={handleOpenModal}
          disabled={isVisibleAlert}
        >
          <span>+</span>добавить
        </Button>
        {isVisibleAlert && (
          <div className="record-donation__alert">
            <Alert severity="success">Вы успешно создали больничный лист № {getRandomNumber()}</Alert>
          </div>
        )}
        <div className="cards__wrapper">
          {sickLeaves.map((sickLeave) => <SickLeaveCard key={sickLeave.id} sickLeaveItem={sickLeave}/> )}
        </div>
        <Dialog
          isOpen={isOpenModal}
          title="Создание больничного листа"
          onClose={handleCloseModal}
          onSave={handleSaveSickLeave}
        >
          <CreateSickLeaveForm/>
        </Dialog>
      </div>
  );
};

export default SickLeavePage;
