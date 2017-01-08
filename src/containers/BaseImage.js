import { connect } from 'react-redux'
import { baseImageDropped } from '../actions'
import ImageDropZone from '../components/ImageDropZone'

const mapStateToProps = (state) => {
    console.log("BASE IMAGE MAP2PROPS", state)
    return state.base
}

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