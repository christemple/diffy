export const BASE_IMAGE_DROPPED = 'BASE_IMAGE_DROPPED'
export const BASE_IMAGE_DROPPED_SUCCESS = 'BASE_IMAGE_DROPPED_SUCCESS'
export const BASE_IMAGE_DATA_RECEIVED = 'BASE_IMAGE_DATA_RECEIVED'
export const COMPARISON_IMAGE_DROPPED_SUCCESS = 'COMPARISON_IMAGE_DROPPED_SUCCESS'
export const COMPARISON_IMAGE_DATA_RECEIVED = 'COMPARISON_IMAGE_DATA_RECEIVED'
export const COMPARE_IMAGES = 'COMPARE_IMAGES'
export const IMAGES_COMPARED = 'IMAGES_COMPARED'
export const IMAGES_READY_TO_COMPARE = 'IMAGES_READY_TO_COMPARE'

export const SIDE_BY_SIDE_CLICKED = 'SIDE_BY_SIDE_CLICKED'
export const SLIDE_COMPARE_CLICKED = 'SLIDE_COMPARE_CLICKED'

import resemble from 'resemblejs'


const readImage = (image) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = ()     => { resolve(reader.result) }
        reader.onerror = (err) => { reject('') }
        reader.readAsDataURL(image);
    });
}

export const baseImageDroppedSuccess = (file) => ({
    type: BASE_IMAGE_DROPPED_SUCCESS,
    file
}) 

export const baseImageDataReceived = (data) => ({
    type: BASE_IMAGE_DATA_RECEIVED,
    data
})

export const comparisonImageDroppedSuccess = (file) => ({
    type: COMPARISON_IMAGE_DROPPED_SUCCESS,
    file
}) 

export const comparisonImageDataReceived = (data) => ({
    type: COMPARISON_IMAGE_DATA_RECEIVED,
    data
})

const shouldCompareImages = (base, comparison) => (
    base.data && comparison.data
)

const imagesReadyToCompare = () => ({
    type: IMAGES_READY_TO_COMPARE
})

export const sideBySideClicked   = () => ({type: SIDE_BY_SIDE_CLICKED})
export const slideCompareClicked = () => ({type: SLIDE_COMPARE_CLICKED})

const compareImages = (base, comparison) => {
    return new Promise((resolve, reject) => {
        resemble(base.data).compareTo(comparison.data).ignoreColors().onComplete((data) => {
            resolve(data.getImageDataUrl())
        })
    })
}

export const imagesCompared = (result) => ({
    type: IMAGES_COMPARED,
    result
})

// THUNKS
export const baseImageDropped = (image) => {
    return (dispatch, getState) => {
        const baseImage = image[0];
        dispatch(baseImageDroppedSuccess(baseImage))
        readImage(baseImage).then((data) => {
            dispatch(baseImageDataReceived(data))
            const { base, comparison } = getState();
            if (shouldCompareImages(base, comparison)) {
                dispatch(imagesReadyToCompare())
            }
        })
    }
}

export const comparisonImageDropped = (image) => {
    return (dispatch, getState) => {
        const comparisonImage = image[0];
        dispatch(comparisonImageDroppedSuccess(comparisonImage))
        readImage(comparisonImage).then((data) => {
            dispatch(comparisonImageDataReceived(data))
            const { base, comparison } = getState();
            if (shouldCompareImages(base, comparison)) {
                dispatch(imagesReadyToCompare())
            }
        })
    }
}
