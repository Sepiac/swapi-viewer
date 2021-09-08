import React from 'react';
import { render, screen } from '@testing-library/react'
import SwapiPerson from '../SwapiPerson'
import personResponse from './person.response.json'

describe('header', () => {
  it('should render name in header', () => {
    render(<SwapiPerson person={personResponse} />);
    expect(screen.getByTestId('header-section')).toHaveTextContent('Luke Skywalker');
  });
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiPerson person={personResponse} />);
  });

  it('should render the name', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('Luke Skywalker');
  });
  it('should render the hair color', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('blond hair');
  });
  it('should render the skin color', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('fair skin');
  });
  it('should render the eye color', () => {
    expect(screen.getByTestId('description-section-1')).toHaveTextContent('blue eyes');
  });
});

describe('description-section-2', () => {
  beforeEach(() => {
    render(<SwapiPerson person={personResponse} />);
  });

  it('should render the height', () => {
    expect(screen.getByTestId('description-section-2')).toHaveTextContent('172cm tall');
  });
  it('should render the weight', () => {
    expect(screen.getByTestId('description-section-2')).toHaveTextContent('77 kilograms');
  });
});

describe('footer', () => {
  it('should render the birth year in the footer', () => {
    render(<SwapiPerson person={personResponse} />);
    expect(screen.getByTestId('footer-section')).toHaveTextContent('born 19BBY');
  });
})
