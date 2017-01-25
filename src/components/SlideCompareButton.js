import React from 'react'

const SlideCompareButton = ({active, disabled, onClick}) => (
    <div 
        className={`control-button ${active? 'active': ''} ${disabled? 'disabled': ''}`}
        onClick={onClick}
    >
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect className="side-by-side-icon__page" x="32" y="2" width="36" height="50"></rect>
            <rect x="48" y="2" width="4" height="80"></rect>
            <circle cx="50" cy="80" r="8"></circle>
        </svg>
    </div>
)

export default SlideCompareButton