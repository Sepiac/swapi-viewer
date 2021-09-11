import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

const SwapiStarhip = ({ vehicle = {} }) => {
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
    vehicle_class: vehicleClass,
  } = vehicle

  return (
    <Card data-testid="swapi-vehicle">
      <CardHeader data-testid="header-section">{name}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Description</CardTitle>
        <CardText data-testid="description-section-1">
          The {name} is a {vehicleClass} class {manufacturer} {model} and is worth {costInCredits} credits.
        </CardText>
        <CardText data-testid="description-section-2">
          This vehicle can carry {passengers} passengers, {cargoCapacity}kg of cargo, and {consumables} of provisions.
        </CardText>
      </CardBody>
      <CardFooter data-testid="footer-section">{name}: ({vehicleClass})</CardFooter>
    </Card>
  )
}

SwapiStarhip.propTypes = {
  vehicle: PropTypes.object
}

export default SwapiStarhip
