import logo from './logo.svg';
import './App.css';
import './Home/base/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plants from './Plants/plants';
import Home from './Home/home-page';
import About from './About/about';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
