import { combineReducers } from 'redux'

import { 
    BASE_IMAGE_DROPPED_SUCCESS,
    COMPARISON_IMAGE_DROPPED_SUCCESS,
    IMAGES_COMPARED
} from './actions'

const imageDefaultState = {file: undefined, data: ''}
const appDefaultState = {
    base: {title: 'Base', image: imageDefaultState},
    comparison: {title: 'Comparison', image: imageDefaultState},
    result: {image: {data: ''}}
}

function app(state = appDefaultState, action) {
    switch(action.type) {
        case BASE_IMAGE_DROPPED_SUCCESS:
            return {...state, base: {title: 'Base', image: action.image} }
        case COMPARISON_IMAGE_DROPPED_SUCCESS:
            return {...state, comparison: {title: 'Comparison', image: action.image} }
        case IMAGES_COMPARED:
            return {...state, result: {image: {data: action.result}} }
        default:
            return state
    }
}

const diffyApp = combineReducers({app})

export default diffyApp
