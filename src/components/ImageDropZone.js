import React, { PropTypes } from 'react'
import DropZone from 'react-dropzone'
import DropZoneInstructions from './DropZoneInstructions'

const ImageDropZone = ({ title, image, onDrop }) => (
    <DropZone className="dropzone" activeClassName="dropzone-active" onDrop={onDrop}>
        {image.file ? <img src={image.file.preview} role="presentation" /> : <DropZoneInstructions title={title}/> }
    </DropZone>
)

ImageDropZone.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.any,
    onDrop: PropTypes.func.isRequired
}

export default ImageDropZone
