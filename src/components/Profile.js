import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
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
    </div>
  );
}

export default Profile;
