import React from "react";

import { Typography } from "@mui/material";
import { PersonalInfo, Vaccination } from "../../components";

import "./styles.scss";

function DocumentsPage() {
  return (
    <div>
      <Typography variant="h4">Мои документы</Typography>
      <div className="documents__content">
        <PersonalInfo />
        <Vaccination
          title={"Вакцинация от COVID-19"}
          information={
            "Прошел(-ла) вакцинацию против новой короновирусной инфекции COVID-19)"
          }
          date={"1.5 года"}
        />
        <Vaccination
          title={"Прививка от гриппа"}
          information={
            "В большинстве случаев достаточно обратиться в детскую или взрослую поликлинику и вам там выдадут заполненный сертификат. Трудности могут возникнуть с больницами, но и это решаемо."
          }
          date={"1 год"}
        />
      </div>
    </div>
  );
}

export default DocumentsPage;
