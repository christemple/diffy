import React from 'react'

const SideBySideButton = ({active, disabled, onClick}) => (
    <div 
        className={`control-button ${active? 'active': ''} ${disabled? 'disabled': ''}`}
        onClick={onClick}
    >
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect className="side-by-side-icon__page" x="2" y="2" width="35" height="50"></rect>
            <rect className="side-by-side-icon__page" x="62" y="2" width="35" height="50"></rect>
            <g className="side-by-side-icon__arrows">
                <rect x="10" y="78" width="80" height="5"></rect>
                <polygon points="20 90, 5 80, 20 70"></polygon>
                <polygon points="80 90, 95 80, 80 70"></polygon>
            </g>
        </svg>
    </div>
)

export default SideBySideButton