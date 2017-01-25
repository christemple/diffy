import { connect } from 'react-redux'
import { baseImageDropped } from '../actions/index'
import ImageDropZone from '../components/ImageDropZone'

const mapStateToProps = (state) => (state.base)
const mapDispatchToProps = (dispatch) => ({
    onDrop: (image) => {
        dispatch(baseImageDropped(image))
    }
})

const BaseImage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageDropZone)

export default BaseImage