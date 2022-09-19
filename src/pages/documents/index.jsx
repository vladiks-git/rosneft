import { Typography } from "@mui/material";
import React from "react";

import "./documents.scss";

function DocumentsPage() {
  return (
    <div>
      <Typography variant="h4">Мои документы</Typography>
      <div className="documents">
        <div className="documents__item">
          <p className="documents__title">Снилс</p>
          <p>123-456-789 00</p>
        </div>
        <div className="documents__item">
          <p className="documents__title">Страховой полис</p>
          <p>4000080066 </p>
        </div>
      </div>
    </div>
  );
}

export default DocumentsPage;
