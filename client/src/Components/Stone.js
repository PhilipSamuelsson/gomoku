import React from 'react'
import PropTypes from 'prop-types'

const Stone = ({ color }) => {
    const stoneStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'black'
    }

    return <div style={stoneStyle} className="stone"></div>
}

Stone.propTypes = {
    color: PropTypes.string.isRequired
}

export default Stone
