import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp';
import MovieComp from './components/MovieComp';
import NavbarComp from './components/NavbarComp';
function App() {
  return (
      <Router>
        <div>
          <NavbarComp/>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/movie/:id' element={<MovieComp/>}/>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
