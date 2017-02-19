import React from 'react'
import SideBySide from '../components/SideBySide'
import SlideCompare from '../components/SlideCompare'
import Result from '../containers/Result'
import ControlsContainer from '../containers/ControlsContainer'
import './App.css'

const App = ({ base, comparison, controls }) => {
  let view = <SideBySide/>
  if (controls.slideCompare.active) {
    view = <SlideCompare base={base} comparison={comparison} />
  }
  return (
    <div id="app">
      {view}
      <ControlsContainer/>
    </div>
  )
}

export default App
