import './App.css';
import { Routes, Route } from 'react-router-dom';
import Mission from './components/Mission';
import Profile from './components/Profile';
import Rocket from './components/Rocket';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
