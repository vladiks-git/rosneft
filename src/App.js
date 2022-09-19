import { AnnualInspectionPage, DocumentsPage, SickLeavePage } from "./pages";

import "./App.css";
import { Header } from "./components";
import { Route, Routes } from "react-router";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
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
