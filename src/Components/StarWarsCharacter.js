import React from 'react'
import PropTypes from 'prop-types'

const StarWarsCharacter = ({ character }) => {

    const {name, homeworld} = character;
    return (
        <div data-testid="star-wars-character">
            <p>
                Name: {name}
            </p>
            <p>
                <a href={homeworld}>Home World</a>
            </p>
        </div>
    )
}

StarWarsCharacter.propTypes = {
    character: PropTypes.object
}

export default StarWarsCharacter
