import React from 'react';
import { render, screen } from '@testing-library/react'
import SwapiFilm from '../SwapiFilm'
import filmResponse from './film.response.json'

describe('header', () => {
  it('should render the correct header', () => {
    render(<SwapiFilm film={filmResponse} />);
    expect(screen.getByTestId('header-section').textContent).toEqual('Episode IV: A New Hope')
  })
})

describe('description-section-1', () => {
  beforeEach(() => {
    render(<SwapiFilm film={filmResponse} />);
  })

  it('should render the correct message', () => {
    const message = 'A New Hope was directed by George Lucas, produced by Gary Kurtz, Rick McCallum, and released on 05/25/1977.'
    expect(screen.getByTestId('description-section-1').textContent).toEqual(message)
  })
})

describe('description-section-2', () => {
  beforeEach(() => {
    render(<SwapiFilm film={filmResponse} />);
  })

  it('should render the correct message', () => {
    const message = "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
    expect(screen.getByTestId('description-section-2').textContent).toEqual(message)
  })
})

describe('footer', () => {
  it('should render the correct footer', () => {
    render(<SwapiFilm film={filmResponse} />);
    expect(screen.getByTestId('footer-section').textContent).toEqual('Episode IV: A New Hope')
  });
})
