import './App.css';
import Navbar from './common-components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './common-components/Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
