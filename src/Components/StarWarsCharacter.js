import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

const StarWarsCharacter = ({ character }) => {

  const {
    name,
    birth_year: birthYear
  } = character;
  return (
    <Container data-testid="star-wars-character">
      Name: {name}
      Birth Year: {birthYear}
    </Container>
  )
}

StarWarsCharacter.propTypes = {
  character: PropTypes.object
}

export default StarWarsCharacter
