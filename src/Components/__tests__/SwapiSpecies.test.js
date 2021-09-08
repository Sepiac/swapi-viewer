import React from 'react';
import { render, screen } from '@testing-library/react'
import SwapiSpecies from '../SwapiSpecies'
import speciesResponse from './species.response.json'

describe('header', () => {
  it('should render name in header', () => {
    render(<SwapiSpecies species={speciesResponse} />);
    expect(screen.getByTestId('header-section')).toHaveTextContent('Human');
  });
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiSpecies species={speciesResponse} />);
  });

  it('should render the name', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('Humans');
  });
  it('should render the designation', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('sentient');
  });
  it('should render the average lifespan', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('120 years');
  });
});

describe('description-section-2', () => {
  beforeEach(() => {
    render(<SwapiSpecies species={speciesResponse} />);
  });

  it('should render the average height', () => {
    expect(screen.getByTestId('description-section-2')).toHaveTextContent('180cm');
  });
});

describe('footer', () => {
  it('should render the name and classification in the footer', () => {
    render(<SwapiSpecies species={speciesResponse} />);
    expect(screen.getByTestId('footer-section')).toHaveTextContent('Human: (mammal)');
  });
})
