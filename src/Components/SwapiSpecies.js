import React from 'react'
import PropTypes from 'prop-types'

const SwapiSpecies = props => {
  const {species} = props;
  return (
    <div>
      {JSON.stringify(species)}
    </div>
  )
}

SwapiSpecies.propTypes = {

}

export default SwapiSpecies
