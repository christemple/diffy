import React from 'react'
import { connect } from 'react-redux'
import Controls from '../components/Controls'
import { sideBySideClicked, slideCompareClicked } from '../actions/index'

const mapStateToProps = (state) => (state.controls)

const mapDispatchToProps = (dispatch) => ({
    onSideBySideClick: () => {
        dispatch(sideBySideClicked())
    },
    onCompareSlideClick: () => {
        dispatch(slideCompareClicked())
    }
})

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default ControlsContainer