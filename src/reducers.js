import resemble from 'resemblejs'

import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import { 
    BASE_IMAGE_DROPPED_SUCCESS,
    COMPARISON_IMAGE_DROPPED_SUCCESS
} from './actions'

function base(state = {title: 'Base', image: {file: undefined, data: ''}}, action) {
    switch(action.type) {
        case 'BASE_IMAGE_DROPPED_SUCCESS':
            return {...state, image: action.image }
        default:
            return state
    }
}

function comparison(state = {title: 'Comparison', image: {file: undefined, data: ''}}, action) {
    switch(action.type) {
        case 'COMPARISON_IMAGE_DROPPED_SUCCESS':
            return {...state, image: action.image }
        default:
            return state
    }
}

function result(state = {image: {data: ''}}, action) {
    return state;
}

function resultUpdater(state = {}, action) {
    console.log(state)
    // if (action.type === BASE_IMAGE_DROPPED_SUCCESS || action.type === COMPARISON_IMAGE_DROPPED_SUCCESS) {
    //     if (state.base.image.file && state.comparison.image.file) {
    //         console.log("WE HAVE TWO FILES")
    //         const baseData = state.base.image.data;
    //         const comparisonData = state.comparison.image.data;
    //         // should this be in a thunk?
    //         resemble(baseData).compareTo(comparisonData).ignoreColors().onComplete(function(data){
    //             const difference = data.getImageDataUrl()
    //             return {...state, result: {image: {data: difference }}}
    //         })
    //     } else {
    //         return {...state, result: {image: {data: 'NO TWO FILES'}}}
    //     }
    // } else {
    //     return {...state, result: {image: {data: 'NOPE'}}}
    // }
}

const diffyApp = combineReducers({
    base,
    comparison,
    result
})

export default reduceReducers(diffyApp, resultUpdater)
