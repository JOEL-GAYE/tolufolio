import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Project';
import Skills from './pages/Skills';


function App() {
  return (
   <div>
   
    <Router>
      <nav className='navbar custom-navbar'>
  <div className='container-fluid d-flex justify-content-between align-items-center'>
    <div className="navbar-nav me-auto d-flex flex-row">
      <Link to="/" className="nav-link custom-nav-link mx-3">HOME</Link>
      <Link to="/services" className="nav-link custom-nav-link mx-3">SERVICES</Link>
      <Link to="/skills" className="nav-link custom-nav-link mx-3">SKILLS</Link>
      <Link to="/projects" className="nav-link custom-nav-link mx-3">PROJECTS</Link>
      <Link to="/contact" className="nav-link custom-nav-link mx-3">CONTACTS</Link>
      
    </div>
    <div className='navbar-nav ms-auto d-flex'>
      <p className="nav-link custom-nav-link mx-3 mb-0">Joel</p>
    </div>
  </div>
</nav>

        <Routes>
          <Route
          path='/'
          element={<Home/>}>

          </Route>
           <Route path="/services" element={<Services />} />
           <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          
        </Routes>
        {(window.location.hash === '#/' || window.location.hash === '#/services' || window.location.hash === '#/projects'|| window.location.hash === '#/contact'|| window.location.hash === '#/skills') && <Footer />}
    </Router>
{/* <Footer/> */}
   </div>
  );
}

export default App;
