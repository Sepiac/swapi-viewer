import React from 'react';
import { render, screen } from '@testing-library/react'
import SwapiSpecies from '../'
import speciesResponse from './species.response.json'

describe('header', () => {
  it('should render the correct header', () => {
    render(<SwapiSpecies species={speciesResponse} />);
    expect(screen.getByTestId('header-section').textContent).toEqual('Human');
  });
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiSpecies species={speciesResponse} />);
  });

  it('should render the correct message', () => {
    const message = 'Humans are a sentient species with an average lifespan of 120 years.'
    expect(screen.getByTestId('description-section-1').textContent).toEqual(message)
  });
});

describe('description-section-2', () => {
  beforeEach(() => {
    render(<SwapiSpecies species={speciesResponse} />);
  });

  it('should render the correct message', () => {
    const message = 'The average height of a Human individual is 180cm.'
    expect(screen.getByTestId('description-section-2').textContent).toEqual(message);
  });
});

describe('footer', () => {
  it('should render the name and classification in the footer', () => {
    render(<SwapiSpecies species={speciesResponse} />);
    expect(screen.getByTestId('footer-section').textContent).toEqual('Human: (mammal)');
  });
})
