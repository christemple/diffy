import React from 'react'
import BaseImage from '../containers/BaseImage'
import ComparisonImage from '../containers/ComparisonImage'
import './App.css'

const App = () => (
  <div id="app">
    <div id="drop-zone-container">
      <BaseImage/>
      <ComparisonImage/>  
    </div>
    <div id="result-container">
    </div>
  </div>
)

export default App
