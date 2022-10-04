import React from "react";
import { CardContent } from "../../../ui-kit";

import "./styles.scss";

function MedicalExaminationList({ data, date }) {
  return (
    <div>
      <CardContent>
        <h4>
          Заключение по результатам ежегодного медицинского осмотра{" "}
          <span className="medical-examination__yaer">{date}</span>
        </h4>
        <div className="medical-examination__content">
          {data.map((infoItem) => (
            <div key={Math.random()} className="medical-examination__item">
              <div className="medical-examination__item-title">
                {infoItem.title}
              </div>
              <div className="medical-examination__item-value">
                {infoItem.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}

export default MedicalExaminationList;
