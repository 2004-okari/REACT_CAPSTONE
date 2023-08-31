import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../components/Profile';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([]);

test('Profile component matches snapshot', () => {
  const store = mockStore({
    missions: {
      missions: [],
    },
    rockets: {
      rockets: [],
    },
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <Profile />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
