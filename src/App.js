import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Home/Contact';
import Home from './components/Home/Home';
import AllProjects from './components/Projects/AllProjects';
import MyProjects from './components/Projects/MyProjects';
import Navigation from './components/Shired/Navigation';

function App() {
  return (
    <div >
      <Navigation>
      </Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<MyProjects />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-projects" element={<AllProjects></AllProjects>} />
      </Routes>
    </div>
  );
}

export default App;
