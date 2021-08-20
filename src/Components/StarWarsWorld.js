import React from 'react'
import PropTypes from 'prop-types'

const StarWarsWorld = ({world}) => {
    return (
        <div>
            {world?.name}
        </div>
    )
}

StarWarsWorld.propTypes = {
    world: PropTypes.object
}

export default StarWarsWorld
