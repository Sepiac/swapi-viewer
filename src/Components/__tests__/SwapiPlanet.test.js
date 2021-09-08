import React from 'react'
import {render, screen} from '@testing-library/react'

import SwapiPlanet from '../SwapiPlanet'
import planetResponse from './planet.response.json'

describe('header', () => {
  it('should render name in header', () => {
    render(<SwapiPlanet planet={planetResponse} />);
    expect(screen.getByTestId('header-section')).toHaveTextContent('Tatooine');
  });
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiPlanet planet={planetResponse} />);
  });

  it('should render the name', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('Tatooine');
  });
  it('should render the terrain', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('desert');
  });
  it('should render the climate', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('arid');
  });
  it('should render the day length', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('23 hours');
  });
  it('should render the year length', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('304 days');
  });
});

describe('footer', () => {
  it('should render the birth year in the footer', () => {
    render(<SwapiPlanet planet={planetResponse} />);
    expect(screen.getByTestId('footer-section')).toHaveTextContent('Tatooine: arid, desert');
  });
})