import { connect } from 'react-redux'
import { comparisonImageDropped } from '../actions'
import ImageDropZone from '../components/ImageDropZone'

const mapStateToProps = (state) => {
    return state.comparison
}

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