import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from './pages/Landing/Landing';
import LoginPage from './pages/Login/Login';
import UploadFiles from './pages/UploadFiles/UploadFiles';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div class="app">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/uploadfiles" element={<UploadFiles />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
