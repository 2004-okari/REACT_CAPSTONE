import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <section className="mission">
        <h3>My Mission</h3>
        {reservedMissions.length === 0 ? <p>No mission reserved</p> : (
          <ul className="lists">
            {reservedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <h3>My Rockets</h3>
        {reservedRocket.length === 0 ? <p>No rockets reserved</p> : (
          <ul className="lists">
            {reservedRocket.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Profile;
