import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import About from './pages/About';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><Admin /></PrivateRoute>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;