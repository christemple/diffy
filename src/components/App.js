import React from 'react'
import BaseImage from '../containers/BaseImage'
import ComparisonImage from '../containers/ComparisonImage'
import Result from '../containers/Result'
import ImageDropzone from '../components/ImageDropZone'
import ImageDiff from '../components/ImageDiff'
import './App.css'

class App extends React.Component {
  render() {
    const { base, comparison, result } = this.props.app
    return (
      <div id="app">
        <div id="drop-zone-container">
          <ImageDropzone title={base.title} image={base.image} onDrop={this.props.onBaseDrop} />
          <ImageDropzone title={comparison.title} image={comparison.image} onDrop={this.props.onComparisonDrop} />  
        </div>
        <ImageDiff image={result.image} />
      </div>
    )
  }
}

export default App
