import React from 'react'
import SideBySideButton from './SideBySideButton'
import SlideCompareButton from './SlideCompareButton'

const Controls = ({
    sideBySide, slideCompare, 
    onSideBySideClick, onCompareSlideClick
}) => (
    <div id="controls">
        <SideBySideButton {...sideBySide} onClick={onSideBySideClick}/>
        <SlideCompareButton {...slideCompare} onClick={onCompareSlideClick}/>
    </div>
)

export default Controls