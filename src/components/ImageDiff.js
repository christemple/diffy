import React from 'react'

const ImageDiff = ({ image }) => (
    <div id="result-container">
        <img src={image.data} role="presentation" />
    </div>
)

export default ImageDiff