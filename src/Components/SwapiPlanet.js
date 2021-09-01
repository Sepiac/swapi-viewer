import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Spinner } from 'reactstrap'
import { isEmpty } from 'lodash';
import { startsWithVowel } from '../utils';

const SwapiPlanet = ({ planet={} }) => {
  const {
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
  } = planet;

  const { detail } = planet;
  return (
    <>
      {!isEmpty(planet) ? (
        <Card data-testid="swapi-planet">
          {detail ? (
            <CardBody>
              <CardText>
                {detail}
              </CardText>
            </CardBody>
          ) : (
            <>
              <CardHeader data-testid="header-section">{name}</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Description</CardTitle>
                <CardText data-testid="description-section-1">
                  {name} is a {terrain} planet with {startsWithVowel(climate) ? 'an' : 'a'} {climate} climate, a day length of {rotationPeriod} hours, and year length of {orbitalPeriod} days.
                </CardText>
              </CardBody>
              <CardFooter data-testid="footer-section">{name}: {climate}, {terrain}</CardFooter>
            </>
          )}

        </Card>
      ) : (<Spinner color="primary" data-testid="loading-indicator" />)}
    </>
  )
}

SwapiPlanet.propTypes = {
  planet: PropTypes.object
}

export default SwapiPlanet
