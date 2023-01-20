import {
  AnnualInspectionPage,
  BloodDonation,
  DispensaryPage,
  DocumentsPage,
  GraphicPage,
  MedicalExamination,
  RecordPage,
  SickLeavePage,
} from './pages';

import './App.css';
import { Header, Navigation } from './components';
import { Navigate, Route, Routes } from 'react-router';
import { Box } from '@mui/material';
import { useState } from 'react';
import './styles/variables.scss';
import News from './pages/News';
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
          <Route exact path="/" element={<Navigate to={'/news'} />} />
          <Route exact path="/news" element={<News />} />
          {/* <Route path="/documents" element={<DocumentsPage />} /> */}
          <Route path="/annualInspection" element={<AnnualInspectionPage />} />
          {/* <Route path="/sickLeave" element={<SickLeavePage />} /> */}
          <Route path="/record" element={<RecordPage />} />
          <Route path="/bloodDonation" element={<BloodDonation />} />
          <Route path="/medicalExamination" element={<MedicalExamination />} />
          <Route path="/graphic" element={<GraphicPage />} />
          <Route path="/dispensary" element={<DispensaryPage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
