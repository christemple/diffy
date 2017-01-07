import React from 'react'
import DropIcon from './DropIcon'

export default class DropZoneInstructions extends React.Component {
    render() {
        return (
            <div className="dropzone-instructions">
                <DropIcon/>
                <div className="message">
                    Drop a {this.props.title} image here, or click and select
                </div>
            </div>
        )
    }
}