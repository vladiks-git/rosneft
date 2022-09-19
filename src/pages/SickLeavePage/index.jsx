import React from "react";
import {SickLeaveCard} from "../../components";

import "./styles.scss";

const sickLeaves = [
  {
    id: 1,
    patientName: "Иванов Иван Иванович",
    patientDob: "10.10.1990",
    patientSnils: "123-456-789 00",
    period: "10.09.2022 - 19.09.2022",
    doctorName: "Петр Петров Петрович",
    reason: "Впдалу работать",
    date: "09.09.2022",
  },
  {
    id: 2,
    patientName: "Иванов Иван Иванович2",
    patientDob: "20.80.1990",
    patientSnils: "123-456-789 00",
    period: "10.09.2062 - 19.09.2022",
    doctorName: "Петр Петров Петрович",
    reason: "Впдалу работать",
    date: "09.09.2022",
  },
  {
    id: 3,
    patientName: "Иванов Иван Иванович3",
    patientDob: "10.10.1950",
    patientSnils: "123-456-789 00",
    period: "10.09.2022 - 19.09.2022",
    doctorName: "Петр Петров Петрович",
    reason: "Впдалу работать",
    date: "09.09.2022",
  },
];

const SickLeavePage = () => {
  return (
    <div className="container">
      {sickLeaves.map((sickLeave) => <SickLeaveCard key={sickLeave.id} sickLeaveItem={sickLeave}/> )}
    </div>
  );
};

export default SickLeavePage;
