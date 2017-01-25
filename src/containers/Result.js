import { connect } from 'react-redux'
import ImageDiff from '../components/ImageDiff'

const mapStateToProps = (state) => (state.result)
const Result = connect(mapStateToProps)(ImageDiff)

export default Result
