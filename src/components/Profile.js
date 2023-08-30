import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <h3>Mission</h3>
      <div>
        {reservedMissions.map(((mission) => (
          <p key={mission.mission_id}>{mission.mission_name}</p>
        )))}
      </div>
      <section>
        <h3>My Rockets</h3>
        {reservedRocket.length === 0 ? <p>No rockets reserved</p> : (
          <ul>
            {reservedRocket.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Profile;
