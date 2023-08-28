import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, toggleReservation } from '../redux/mission/missionSlice';
import './mission.css';

function Mission() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const { status, error } = useSelector((state) => state.missions);
  console.log(missions);
  console.log(status);

  useEffect(() => {
    dispatch(fetchMissions());
  },[dispatch]);

  const handleReservationToggle = (missionId) => {
    dispatch(toggleReservation(missionId)); 
  };

  
  return (
    <>
      {status === 'loading' ? (<span className="loader"></span>) : ''}
      {status === 'failed' ? (<span>Error: {error}</span>) : ''}
      <table>
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td>Join/Cancel</td>
          </tr>
        </thead>
        <tbody>
          {missions.map(mission => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{!mission.reserved ? (<button>Not a member</button>) : (<button>Active member</button>)}</td>
              <td><button type='button' onClick={() => handleReservationToggle(mission.mission_id)}>{!mission.reserved ? "Join a mission" : "Leave mission"}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Mission;
