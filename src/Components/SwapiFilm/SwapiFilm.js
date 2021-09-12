import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
import { getFormattedDate } from '../../utils'
import romanNumeral from 'roman-numeral'

const SwapiFilm = ({ film = {} }) => {
  const {
    title,
    episode_id: episodeId,
    opening_crawl: openingCrawl,
    director,
    producer,
    release_date: releaseDate,
  } = film

  return (
      <Card data-testid="swapi-film">
        <CardHeader data-testid="header-section">Episode {romanNumeral.convert(episodeId)}: {title}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Description</CardTitle>
          <CardText data-testid="description-section-1">
            {title} was directed by {director}, produced by {producer}, and released on {getFormattedDate(releaseDate)}.
          </CardText>
          <CardText data-testid="description-section-2">
            {openingCrawl}
          </CardText>
        </CardBody>
        <CardFooter data-testid="footer-section">Episode {romanNumeral.convert(episodeId)}: {title}</CardFooter>
      </Card>
  )
}

SwapiFilm.propTypes = {
  film: PropTypes.object
}

export default SwapiFilm
