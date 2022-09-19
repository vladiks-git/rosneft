import { AnnualInspectionPage, DocumentsPage, SickLeavePage } from "./pages";

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
          <Route path="/" element={<DocumentsPage />} />
          <Route path="annual" element={<AnnualInspectionPage />} />
          <Route path="sickLeaves" element={<SickLeavePage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
