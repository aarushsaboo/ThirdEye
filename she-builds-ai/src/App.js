import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from './pages/Landing/Landing';

function App() {
  return (
    <div class="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
