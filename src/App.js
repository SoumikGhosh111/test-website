import './App.css';
import Navbar from './common-components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
