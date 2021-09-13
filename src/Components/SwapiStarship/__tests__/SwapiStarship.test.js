import React from 'react'
import { render, screen } from '@testing-library/react'
import SwapiStarship from '..'
import starshipResponse from './starship.response.json'

describe('header', () => {
  it('should render the correct header', () => {
    render(<SwapiStarship starship={starshipResponse} />)
    expect(screen.getByTestId('header-section').textContent).toEqual('CR90 corvette')
  })
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiStarship starship={starshipResponse} />)
  })

  it('should render the correct message', () => {
    const message = 'The CR90 corvette is a corvette class Corellian Engineering Corporation CR90 corvette and is worth 3500000 credits.'
    expect(screen.getByTestId('description-section-1').textContent).toEqual(message)
  })
})

describe('description-section-2', () => {
  beforeEach(() => {
    render(<SwapiStarship starship={starshipResponse} />)
  })

  it('should render the correct message', () => {
    const message = 'This ship can carry 600 passengers, has a hyperdrive rating of 2.0, and can carry 1 year of provisions.'
    expect(screen.getByTestId('description-section-2').textContent).toEqual(message)
  })
})

describe('footer', () => {
  it('should render the correct footer', () => {
    render(<SwapiStarship starship={starshipResponse} />)
    expect(screen.getByTestId('footer-section').textContent).toEqual('CR90 corvette: (corvette)')
  })
})
