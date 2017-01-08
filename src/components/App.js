import React from 'react'
import BaseImage from '../containers/BaseImage'
import ComparisonImage from '../containers/ComparisonImage'
import Result from '../containers/Result'
import './App.css'

const App = () => (
  <div id="app">
    <div id="drop-zone-container">
      <BaseImage/>
      <ComparisonImage/>  
    </div>
    <Result/>
  </div>
)

export default App
