import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, toggleReservation } from '../redux/rocket/rocketSlice';
import './rocket.css';

function Rocket() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const { status, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const handleReservationToggle = (rocketId) => {
    dispatch(toggleReservation(rocketId));
  };

  return (
    <div className="rocket-wrapper">
      {status === 'loading' ? <div className="loader" /> : ''}
      {status === 'failed' ? <div className="error">{error}</div> : ''}
      <ul className="rocketList">
        { rockets.map((rocket) => (
          <li key={rocket.id}>
            <img src={rocket.flickr_images} alt={rocket.name} className="rocketImage" />
            <div className="rocket-info">
              <h2 className="rocket-name">{rocket.name}</h2>
              <p>
                <span style={{ display: rocket.reserved ? 'inline' : 'none' }} className="reserve">Reserved</span>
                {rocket.description}
              </p>

              <button
                type="button"
                className={`reservationBtn ${rocket.reserved ? 'reserved' : ''}`}
                onClick={() => handleReservationToggle(rocket.id)}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rocket;
