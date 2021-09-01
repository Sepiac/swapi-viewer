import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Spinner } from 'reactstrap'
import { isEmpty } from 'lodash';
import { startsWithVowel } from '../utils';

const SwapiPlanet = ({ planet }) => {
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
        <Card data-testid="star-wars-character">
          {detail ? (
            <CardBody>
              <CardText>
                {detail}
              </CardText>
            </CardBody>
          ) : (
            <>
              <CardHeader>{name}</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Description</CardTitle>
                <CardText>
                  {name} is a {terrain} planet with {startsWithVowel(climate) ? 'an' : 'a'} {climate} climate, a day length of {rotationPeriod} hours, and year length of {orbitalPeriod} days.
                </CardText>
                <CardText>
                </CardText>
              </CardBody>
              <CardFooter>{name}: {climate}, {terrain}</CardFooter>
            </>
          )}

        </Card>
      ) : (<Spinner color="primary" />)}
    </>
  )
}

SwapiPlanet.propTypes = {
  planet: PropTypes.object
}

export default SwapiPlanet
