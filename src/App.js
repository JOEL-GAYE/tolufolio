import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Project';


function App() {
  return (
   <div>
   
    <Router>
      < nav className='navbar'>
      <div className='container-fluid'>
        <div className='logo'>
          <p>Joel</p>
        </div>
         <div className="navbar-nav me-auto">
              <Link to="/" className="nav-link custom-nav-link mx-3">Home|</Link>
              <Link to="/services" className="nav-link custom-nav-link mx-3">Services|</Link>
              <Link to="/projects" className="nav-link custom-nav-link mx-3">Projects|</Link>
              <Link to="/contact" className="nav-link custom-nav-link mx-3">Contacts</Link>
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
        </Routes>
        {(window.location.hash === '#/' || window.location.hash === '#/services' || window.location.hash === '#/projects'|| window.location.hash === '#/contact') && <Footer />}
    </Router>
{/* <Footer/> */}
   </div>
  );
}

export default App;
