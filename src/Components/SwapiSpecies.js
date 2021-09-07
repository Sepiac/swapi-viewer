import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Spinner } from 'reactstrap'
import PropTypes from 'prop-types'
import { startsWithVowel } from '../utils'

const SwapiSpecies = props => {
  const { species } = props;

  const {
    name,
    classification,
    designation,
    average_height: averageHeight,
    skin_colors: skinColors,
    hair_colors: hairColors,
    eye_colors: eyeColors,
    average_lifespan: averageLifespan,
    language,
    detail,
  } = species;


  return (
    <Card data-testid="swapi-person">
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
              {name}s are a {designation} species with an average lifespan of {averageLifespan} years.
            </CardText>
            <CardText data-testid="description-section-2">
              The average height of {startsWithVowel(name) ? 'an' : 'a'} {name} individual is {averageHeight}cm.
            </CardText>
          </CardBody>
          <CardFooter data-testid="footer-section">{name}: ({classification})</CardFooter>
        </>
      )}
    </Card>
  )
}

SwapiSpecies.propTypes = {
  species: PropTypes.object
}

export default SwapiSpecies
