import './index.css';
import './App.css';
import SidebarNav from './components/SidebarNav';
import { Routes, Route } from 'react-router';
import Homepage from './components/pages/Homepage';
import TriagePage from './components/pages/TriagePage';
import TranportPage from './components/pages/TranportPage';
import TreatmentPage from './components/pages/TreatmentPage';
import HistoryPage from './components/pages/HistoryPage';
import SettingsPage from './components/pages/SettingsPage';
import NotFound from './components/pages/NotFound';

function App() {

  return (
    <>
      <SidebarNav />
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/Triage' element={<TriagePage />} />
          <Route path='/Transport' element={<TranportPage />} />
          <Route path='/Treatment' element={<TreatmentPage />} />
          <Route path='/History' element={<HistoryPage />} />
          <Route path='/Settings' element={<SettingsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
