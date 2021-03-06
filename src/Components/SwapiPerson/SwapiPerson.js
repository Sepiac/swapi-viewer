import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
import { capitalizeFirstLetter } from '../../utils'

const SwapiPerson = ({ person = {} }) => {

  const {
    name,
    height,
    mass,
    hair_color: hairColor,
    skin_color: skinColor,
    eye_color: eyeColor,
    birth_year: birthYear,
    gender
  } = person

  const getPronoun = () => {
    return gender === 'male' ? 'he' : gender === 'female' ? 'she' : 'they'
  }

  return (
    <Card data-testid="swapi-person">
      <CardHeader data-testid="header-section">{name}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Description</CardTitle>
        <CardText data-testid="description-section-1">
          {capitalizeFirstLetter(name)} has {hairColor} hair with {skinColor} skin and {eyeColor} eyes.
        </CardText>
        <CardText data-testid="description-section-2">
          {capitalizeFirstLetter(getPronoun())} {(gender !== 'male' && gender !== 'female') ? 'are' : 'is'} {height}cm tall and weighs {mass} kilograms.
        </CardText>
      </CardBody>
      <CardFooter data-testid="footer-section">born {birthYear}</CardFooter>
    </Card>
  )
}

SwapiPerson.propTypes = {
  person: PropTypes.object
}

export default SwapiPerson
