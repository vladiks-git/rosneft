import {AnnualInspectionPage, DocumentsPage, RecordPage, SickLeavePage} from "./pages";

import "./App.css";
import { Header, Navigation } from "./components";
import { Route, Routes } from "react-router";
import { Box } from "@mui/material";
import { useState } from "react";

function App() {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);

  const handleOpenNavigation = () => setIsOpenNavigation(true);
  const handleCloseNavigation = () => setIsOpenNavigation(false);

  return (
    <div className="App">
      <Header onOpenNavigation={handleOpenNavigation} />
      <Navigation onClose={handleCloseNavigation} open={isOpenNavigation} />
      <Box p={2}>
        <Routes>
          <Route exact path="/" element={<DocumentsPage />} />
          <Route path="/annualInspection" element={<AnnualInspectionPage />} />
          <Route path="/sickLeave" element={<SickLeavePage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
