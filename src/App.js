import logo from './logo.svg';
import './App.css';
import './Home/base/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plants from './Plants/plants';
import Home from './Home/home-page';
import About from './About/about';
import Contact from './Contact/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;
