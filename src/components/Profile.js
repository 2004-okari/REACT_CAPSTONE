import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <>
      <h3>Mission</h3>
      <div>
        {reservedMissions.map(((mission) => (
          <p key={mission.mission_id}>{mission.mission_name}</p>
        )))}
      </div>
    </>
  );
}

export default Profile;
