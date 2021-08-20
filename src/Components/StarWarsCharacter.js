import React from 'react'
import PropTypes from 'prop-types'

const StarWarsCharacter = ({ character }) => {

    const { name } = character;
    return (
        <div data-testid="star-wars-character">
            Name: {name}
        </div>
    )
}

StarWarsCharacter.propTypes = {
    character: PropTypes.object
}

export default StarWarsCharacter
