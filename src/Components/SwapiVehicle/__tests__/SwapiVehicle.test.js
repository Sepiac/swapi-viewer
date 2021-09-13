import React from 'react';
import { render, screen } from '@testing-library/react'
import SwapiVehicle from '..'
import vehicleResponse from './vehicle.response.json'

describe('header', () => {
  it('should render the correct header', () => {
    render(<SwapiVehicle vehicle={vehicleResponse} />);
    expect(screen.getByTestId('header-section')).toHaveTextContent('Sand Crawler')
  })
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiVehicle vehicle={vehicleResponse} />);
  })

  it('should render the correct message', () => {
    const message = 'The Sand Crawler is a wheeled class Corellia Mining Corporation Digger Crawler and is worth 150000 credits.'
    expect(screen.getByTestId('description-section-1')).toHaveTextContent(message)
  })
})

describe('description-section-2', () => {
  beforeEach(() => {
    render(<SwapiVehicle vehicle={vehicleResponse} />);
  })

  it('should render the correct message', () => {
    const message = 'This vehicle can carry 30 passengers, 50000kg of cargo, and 2 months of provisions.'
    expect(screen.getByTestId('description-section-2')).toHaveTextContent(message)
  })
})

describe('footer', () => {
  it('should render the correct footer', () => {
    render(<SwapiVehicle vehicle={vehicleResponse} />);
    expect(screen.getByTestId('footer-section')).toHaveTextContent('Sand Crawler: (wheeled)')
  });
})
