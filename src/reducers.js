import { combineReducers } from 'redux'

import { 
    BASE_IMAGE_DROPPED_SUCCESS,
    BASE_IMAGE_DATA_RECEIVED,
    COMPARISON_IMAGE_DROPPED_SUCCESS,
    COMPARISON_IMAGE_DATA_RECEIVED,
    IMAGES_COMPARED,
    IMAGES_READY_TO_COMPARE,
    SIDE_BY_SIDE_CLICKED,
    SLIDE_COMPARE_CLICKED
} from './actions/index'

const imageDefaultState = {file: undefined, data: ''}

function base(state = imageDefaultState, action) {
    switch(action.type) {
        case BASE_IMAGE_DROPPED_SUCCESS:
            return {...state, file: action.file}
        case BASE_IMAGE_DATA_RECEIVED:
            return {...state, data: action.data }
        default:
            return state
    }
}

function comparison(state = imageDefaultState, action) {
    switch(action.type) {
        case COMPARISON_IMAGE_DROPPED_SUCCESS:
            return {...state, file: action.file}
        case COMPARISON_IMAGE_DATA_RECEIVED:
            return {...state, data: action.data }
        default:
            return state
    }
}

function result(state = {data: ''}, action) {
    switch(action.type) {
        case IMAGES_COMPARED:
            return {...state, data: action.result }
        default:
            return state   
    }
}

const deactivateControls = (state) => {
    for (const control of Object.keys(state)) {
        state[control].active = false
    }
    return state
}

const defaultControlsState = {
    sideBySide: {active: true, disabled: false},
    slideCompare: {active: false, disabled: true},
}
function controls(state = defaultControlsState, action) {
    switch(action.type) {
        case IMAGES_READY_TO_COMPARE:
            const stateWithoutDisabled = state
            for (const control of Object.keys(stateWithoutDisabled)) {
                stateWithoutDisabled[control].disabled = false
            }
            return {...state, stateWithoutDisabled}
        case SIDE_BY_SIDE_CLICKED:
            const stateWithSideBySideEnabled = deactivateControls({...state})
            stateWithSideBySideEnabled.sideBySide.active = true
            return {...state, stateWithSideBySideEnabled}
        case SLIDE_COMPARE_CLICKED:
            if (!state.slideCompare.disabled) {
                const stateWithSlideCompareEnabled = deactivateControls({...state})
                stateWithSlideCompareEnabled.slideCompare.active = true
                return {...state, stateWithSlideCompareEnabled}
            }
        default:
            return state
    }
}

const diffyApp = combineReducers({
    base, 
    comparison,
    result,
    controls
})

export default diffyApp
