import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/App.css';
import Home from './components/Home';
import Prueba from './components/Prueba';
import Statistics from './components/Statistics';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Prueba />} />
          <Route path="/statistics" element={<Statistics />} />
          {/* Otras rutas van aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
