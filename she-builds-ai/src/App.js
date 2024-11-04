import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
