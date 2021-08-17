import React from 'react'
import PropTypes from 'prop-types'

const StarWarsCharacter = ({ character }) => {
    return (
        <div>
            {character.name}
        </div>
    )
}

StarWarsCharacter.propTypes = {
    character: PropTypes.object
}

export default StarWarsCharacter
