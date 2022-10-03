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
        <Vaccination />
      </div>
    </div>
  );
}

export default DocumentsPage;
