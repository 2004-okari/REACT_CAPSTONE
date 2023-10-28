import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navbar component', () => {
  it('renders correctly', () => {
    const { tree } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('navigates to the correct routes on link click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    const rocketLink = getByText('Rocket');
    const missionLink = getByText('Mission');
    const profileLink = getByText('Profile');

    expect(rocketLink.getAttribute('href')).toBe('/');
    expect(missionLink.getAttribute('href')).toBe('/mission');
    expect(profileLink.getAttribute('href')).toBe('/profile');
  });
});
