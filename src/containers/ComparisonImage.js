import { connect } from 'react-redux'
import { comparisonImageDropped } from '../actions/index'
import ImageDropZone from '../components/ImageDropZone'

const mapStateToProps = (state) => (state.comparison)
const mapDispatchToProps = (dispatch) => ({
    onDrop: (image) => {
        dispatch(comparisonImageDropped(image))
    }
})

const ComparisonImage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageDropZone)

export default ComparisonImage