import React from 'react'
import {render, screen} from '@testing-library/react'

import SwapiPlanet from '../SwapiPlanet'
import planetResponse from './planet.response.json'

describe('header', () => {
  it('should render the correct header', () => {
    render(<SwapiPlanet planet={planetResponse} />);
    expect(screen.getByTestId('header-section').textContent).toEqual('Tatooine');
  });
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiPlanet planet={planetResponse} />);
  });

  it('should render the correct message', () => {
    const message = 'Tatooine is a desert planet with an arid climate, a day length of 23 hours, and year length of 304 days.'
    expect(screen.getByTestId('description-section-1').textContent).toEqual(message)
  });
});

describe('footer', () => {
  it('should render the birth year in the footer', () => {
    render(<SwapiPlanet planet={planetResponse} />);
    expect(screen.getByTestId('footer-section').textContent).toEqual('Tatooine: arid, desert');
  });
})