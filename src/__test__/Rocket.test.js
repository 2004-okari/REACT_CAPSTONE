import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Rocket from '../components/Rocket';

const mockStore = configureStore([]);

describe('Rocket component', () => {
  test('displays rockets with reservation status', () => {
    const initialState = {
      rockets: {
        rockets: [
          {
            id: 1, name: 'Rocket 1', description: 'Rocket 1 description', reserved: true,
          },
          {
            id: 2, name: 'Rocket 2', description: 'Rocket 2 description', reserved: false,
          },
        ],
        status: 'idle',
        error: null,
      },
    };

    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );

    const rocket1NameElement = screen.getByText('Rocket 1');
    const rocket2NameElement = screen.getByText('Rocket 2');
    const rocket1DescriptionElement = screen.getByText('Rocket 1 description');
    const rocket2DescriptionElement = screen.getByText('Rocket 2 description');
    const reserveButton1 = screen.getByText('Cancel Reservation');
    const reserveButton2 = screen.getByText('Reserve Rocket');

    expect(rocket1NameElement).toBeInTheDocument();
    expect(rocket2NameElement).toBeInTheDocument();
    expect(rocket1DescriptionElement).toBeInTheDocument();
    expect(rocket2DescriptionElement).toBeInTheDocument();
    expect(reserveButton1).toBeInTheDocument();
    expect(reserveButton2).toBeInTheDocument();
  });

  test('rockets component matches snapshot', () => {
    const initialState = {
      rockets: {
        rockets: [
          {
            id: 1, name: 'Rocket 1', description: 'Rocket 1 description', reserved: true,
          },
          {
            id: 2, name: 'Rocket 2', description: 'Rocket 2 description', reserved: false,
          },
        ],
        status: 'idle',
        error: null,
      },
    };

    const store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
