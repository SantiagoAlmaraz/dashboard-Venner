import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/App.css';
import Home from './components/Home';
import Prueba from './components/Prueba';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Prueba />} />
          {/* Otras rutas van aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
