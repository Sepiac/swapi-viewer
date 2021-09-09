import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

const SwapiStarhip = ({ starship = {} }) => {
  const {
    name,
  } = starship

  return (
      <Card data-testid="swapi-planet">
        <CardHeader data-testid="header-section">{name}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Description</CardTitle>
          <CardText data-testid="description-section-1">
            {name} 
          </CardText>
        </CardBody>
        <CardFooter data-testid="footer-section">{name}</CardFooter>
      </Card>
  )
}

SwapiStarhip.propTypes = {
  starship: PropTypes.object
}

export default SwapiStarhip
