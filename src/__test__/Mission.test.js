import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

test('renders mission component', () => {
  const initialState = {
    missions: {
      missions: [
        {
          mission_id: 'mission1',
          mission_name: 'Mission 1',
          description: 'Mission 1 description',
          reserved: false,
        },
      ],
      status: 'idle',
      error: null,
    },
  };
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Mission />
    </Provider>
  );

  const missionNameElement = screen.getByText('Mission 1');
  const missionDescriptionElement = screen.getByText('Mission 1 description');
  expect(missionNameElement).toBeInTheDocument();
  expect(missionDescriptionElement).toBeInTheDocument();
});