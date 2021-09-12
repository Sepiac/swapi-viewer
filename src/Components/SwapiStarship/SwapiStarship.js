import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

const SwapiStarhip = ({ starship = {} }) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits: costInCredits,
    length,
    max_atmosphering_speed: maxAtmospheringSpeed,
    crew,
    passengers,
    cargo_capacity: cargoCapacity,
    consumables,
    hyperdrive_rating: hyperdriveRating,
    MGLT,
    starship_class: starshipClass,
  } = starship

  return (
    <Card data-testid="swapi-planet">
      <CardHeader data-testid="header-section">{name}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Description</CardTitle>
        <CardText data-testid="description-section-1">
          The {name} is a {starshipClass} class {manufacturer} {model} and is worth {costInCredits} credits.
        </CardText>
        <CardText data-testid="description-section-2">
          This ship can carry {passengers} passengers, has a hyperdrive rating of {hyperdriveRating}, and can carry {consumables} of provisions.
        </CardText>
      </CardBody>
      <CardFooter data-testid="footer-section">{name}: ({starshipClass})</CardFooter>
    </Card>
  )
}

SwapiStarhip.propTypes = {
  starship: PropTypes.object
}

export default SwapiStarhip
