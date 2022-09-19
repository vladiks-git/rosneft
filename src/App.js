import { AnnualInspectionPage, DocumentsPage, SickLeavePage } from "./pages";

import "./App.css";
import { Header } from "./components";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DocumentsPage />} />
        <Route path="annual" element={<AnnualInspectionPage />} />
        <Route path="sickLeaves" element={<SickLeavePage />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </div>
  );
}

export default App;
