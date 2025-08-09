import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProyectosPage from './Proyectos/main.jsx';

function App() {
  return (
    <Router>
      <div className="landing-container">
        {/* Menú de navegación */}
        <nav style={{ marginBottom: '24px', textAlign: 'center' }}>
          <Link to="/">Inicio</Link> |{' '}
          <Link to="/proyectos">Proyectos</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/proyectos" element={<ProyectosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
