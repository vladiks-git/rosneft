import React from "react";
import IconVaccination from "../../../assets/icons/IconVaccination";
import { CardContent } from "../../../ui-kit";

import "./style.scss";

function Vaccination() {
  return (
    <CardContent>
      <div className="vaccination-card">
        <div className="vaccination-card__title">
          <IconVaccination />
          <h4>Вакцинация от COVID-19</h4>
        </div>
        <div className="vaccination-card__item">
          <p className="vaccination-card__item-title">Дата выдачи</p>
          <p>16.05.2020</p>
        </div>
        <div className="vaccination-card__item">
          <p className="vaccination-card__item-title">Информация</p>
          <p>
            Прошел(-ла) вакциеацию против новой короновирусной инфекции
            (COVID-19)
          </p>
        </div>
      </div>
    </CardContent>
  );
}

export default Vaccination;
