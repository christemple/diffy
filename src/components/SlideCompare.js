import React from 'react'
import TwentyTwenty from 'react-twentytwenty'

const SlideCompare = ({base, comparison}) => (
    <div id="slide-compare">
        <TwentyTwenty className="slider-container">
            <img src={base.data} />
            <img src={comparison.data} />
            <div className="slider" />
        </TwentyTwenty>
    </div>
)

export default SlideCompare