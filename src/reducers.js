import { combineReducers } from 'redux'
import { 
    BASE_IMAGE_DROPPED,
    COMPARISON_IMAGE_DROPPED
} from './actions'

function base(state = {title: 'Base', image: undefined}, action) {
    console.log(action.image)
    switch(action.type) {
        case BASE_IMAGE_DROPPED:
            return { 
                ...state, 
                image: action.image[0]
            }
        default:
            return state
    }
}

function comparison(state = {title: 'Comparison', image: undefined}, action) {
    switch(action.type) {
        case COMPARISON_IMAGE_DROPPED:
            return { 
                ...state, 
                image: action.image[0]
            }
        default:
            return state
    }
}

function result(state = {image: undefined}, action) {
    return state;
}

const diffyApp = combineReducers({
    base,
    comparison,
    result
})

export default diffyApp
