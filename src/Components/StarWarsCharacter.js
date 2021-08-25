import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

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
  return (
    <Container data-testid="star-wars-character">
      <Row>
        <Col>
          Name: {name}
        </Col>
        <Col>
          Height: {height}
        </Col>
        <Col>
          Mass: {mass}
        </Col>
        <Col>
          Hair Color: {hairColor}
        </Col>
      </Row>
      <Row>
        <Col>
          Skin Color: {skinColor}
        </Col>
        <Col>
          Eye Color: {eyeColor}
        </Col>
        <Col>
          Birth Year: {birthYear}
        </Col>
        <Col>
          Gender: {gender}
        </Col>
      </Row>
    </Container>
  )
}

StarWarsCharacter.propTypes = {
  character: PropTypes.object
}

export default StarWarsCharacter
