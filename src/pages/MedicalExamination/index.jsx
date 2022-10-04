import React from "react";
import { MedicalExaminationList } from "../../components/medicalExamination";

import "./styles.scss";

const MedicalExaminationData = [
  {
    title: "Дата выдачи заключения",
    value: "13.04.2020",
  },
  {
    title: "ФИО",
    value: "Иван Ивано Иванович",
  },
  {
    title: "Дата рождения",
    value: "15.04.1975",
  },
  {
    title: "Место работы",
    value: "Завод НПЗ",
  },
  {
    title: "Структурное подразделение",
    value: "Подразделение 1",
  },
  {
    title: "Профессия (должность)",
    value: "Старший оператор",
  },
  {
    title: "Результат медицинского осмотра",
    value: "Противопоказания не выявлены",
  },
  {
    title: "Председатель врачебной комиссии",
    value: "Иван Иванов Иванович (И.И. Иванович)",
  },
  {
    title: "Дата обследования",
    value: `"13" августа 2020г`,
  },
];

function MedicalExamination() {
  return (
    <div className="medical-examination-page">
      <MedicalExaminationList date={"2021"} data={MedicalExaminationData} />
      <MedicalExaminationList date={"2020"} data={MedicalExaminationData} />
    </div>
  );
}

export default MedicalExamination;
