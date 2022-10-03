import React from "react";

import "./personal-info.scss";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <div className="personal-info__item">
        <p className="personal-info__title">Снилс</p>
        <p>123-456-789 00</p>
      </div>
      <div className="personal-info__item">
        <p className="personal-info__title">ИНН</p>
        <p>563565286576</p>
      </div>
      <div className="personal-info__item">
        <p className="personal-info__title">Страховой полис</p>
        <p>4000080066 </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
