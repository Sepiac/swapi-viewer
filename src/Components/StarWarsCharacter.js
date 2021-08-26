import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

const StarWarsCharacter = ({ character }) => {

  const {
    name,
    height,
    mass,
    hair_color: hairColor,
    skin_color: skinColor,
    eye_color: eyeColor,
    birth_year: birthYear,
    gender
  } = character;

  const getPronoun = () => {
    return gender === 'male' ? 'he' : gender === 'female' ? 'she' : 'they';
  }

  const capitalizeFirstLetter = (string='') => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Description</CardTitle>
        <CardText>
          {capitalizeFirstLetter(name)} has {hairColor} hair with {skinColor} skin and {eyeColor} eyes.
        </CardText>
        <CardText>
          {capitalizeFirstLetter(getPronoun())} is {height}cm tall and weighs {mass} kilograms.
        </CardText>
      </CardBody>
      <CardFooter>born {birthYear}</CardFooter>
    </Card>
  )
}

StarWarsCharacter.propTypes = {
  character: PropTypes.object
}

export default StarWarsCharacter
