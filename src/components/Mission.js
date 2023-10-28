import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReservation } from '../redux/mission/missionSlice';
import './mission.css';

function Mission() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const { status, error } = useSelector((state) => state.missions);

  const handleReservationToggle = (missionId) => {
    dispatch(toggleReservation(missionId));
  };

  return (
    <>
      {status === 'loading' ? (<span className="loader">Load&nbsp;ng</span>) : ''}
      {status === 'failed' ? (
        <span>
          Error:
          {error}
        </span>
      ) : ''}
      <table className="table">
        <thead className="thead">
          <tr className="thead-row">
            <td className="thead-title">Mission</td>
            <td className="thead-title">Description</td>
            <td className="thead-title">Status</td>
            <td className="thead-title" aria-label="join" />
          </tr>
        </thead>
        <tbody className="tbody">
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="tbody-row">
              <td className="mission-text">{mission.mission_name}</td>
              <td className="mission-text">{mission.description}</td>
              <td className="btn-status">{!mission.reserved ? (<p className="not">NOT A MEMBER</p>) : (<p className="member">Active member</p>)}</td>
              <td className="mission-text"><button className={mission.reserved ? 'cancel-btn' : 'reserve-btn'} type="button" onClick={() => handleReservationToggle(mission.mission_id)}>{!mission.reserved ? 'Join a mission' : 'Leave mission'}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Mission;
