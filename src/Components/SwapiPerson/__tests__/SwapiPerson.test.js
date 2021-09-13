import React from 'react';
import { render, screen } from '@testing-library/react'
import SwapiPerson from '../SwapiPerson'
import personResponse from '../__tests__/person.response.json'

describe('header', () => {
  it('should render the correct header', () => {
    render(<SwapiPerson person={personResponse} />);
    expect(screen.getByTestId('header-section').textContent).toEqual('Luke Skywalker');
  });
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiPerson person={personResponse} />);
  });

  it('should render the correct message', () => {
    const message = 'Luke Skywalker has blond hair with fair skin and blue eyes.'
    expect(screen.getByTestId('description-section-1').textContent).toEqual(message)
  });
});

describe('description-section-2', () => {
  beforeEach(() => {
    render(<SwapiPerson person={personResponse} />);
  });

  it('should render the correct message', () => {
    const message = 'He is 172cm tall and weighs 77 kilograms.'
    expect(screen.getByTestId('description-section-2').textContent).toEqual(message)
  });
});

describe('footer', () => {
  it('should render the birth year in the footer', () => {
    render(<SwapiPerson person={personResponse} />);
    expect(screen.getByTestId('footer-section').textContent).toEqual('born 19BBY');
  });
})
