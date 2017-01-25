import React, { PropTypes } from 'react'
import DropZone from 'react-dropzone'
import DropZoneInstructions from './DropZoneInstructions'

const ImageDropZone = ({ file, onDrop }) => (
    <DropZone className="dropzone" activeClassName="dropzone-active" onDrop={onDrop}>
        {file ? <img src={file.preview} role="presentation" /> : <DropZoneInstructions/> }
    </DropZone>
)

ImageDropZone.propTypes = {
    file: PropTypes.any,
    onDrop: PropTypes.func.isRequired
}

export default ImageDropZone
