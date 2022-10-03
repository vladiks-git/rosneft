import React from "react";

import { Typography } from "@mui/material";
import { PersonalInfo } from "../../components";

function DocumentsPage() {
  return (
    <div>
      <Typography variant="h4">Мои документы</Typography>
      <PersonalInfo />
    </div>
  );
}

export default DocumentsPage;
