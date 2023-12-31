import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mission from './components/Mission';
import Profile from './components/Profile';
import Rocket from './components/Rocket';
import Navigation from './components/Navigation';
import { fetchMissions } from './redux/mission/missionSlice';
import { fetchRockets } from './redux/rocket/rocketSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
