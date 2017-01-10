export const BASE_IMAGE_DROPPED = 'BASE_IMAGE_DROPPED'
export const BASE_IMAGE_DROPPED_SUCCESS = 'BASE_IMAGE_DROPPED_SUCCESS'
export const COMPARISON_IMAGE_DROPPED = 'COMPARISON_IMAGE_DROPPED'
export const COMPARISON_IMAGE_DROPPED_SUCCESS = 'COMPARISON_IMAGE_DROPPED_SUCCESS'
export const COMPARE_IMAGES = 'COMPARE_IMAGES'
export const IMAGES_COMPARED = 'IMAGES_COMPARED'

import resemble from 'resemblejs'


const readImage = (image) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
            const base64data = reader.result
            resolve(base64data)
        }
        reader.onerror = (err) => {
            reject('')
        }
        reader.readAsDataURL(image);
    });
}

const compareImages = (base, comparison) => {
    return new Promise((resolve, reject) => {
        resemble(base).compareTo(comparison).ignoreColors().onComplete((data) => {
            resolve(data.getImageDataUrl())
        })
    })
}

export const baseImageDroppedSuccess = (image) => ({
    type: BASE_IMAGE_DROPPED_SUCCESS,
    image
}) 

export const comparisonImageDroppedSuccess = (image) => ({
    type: COMPARISON_IMAGE_DROPPED_SUCCESS,
    image
}) 

export const imagesCompared = (result) => ({
    type: IMAGES_COMPARED,
    result
})


// THUNKS
export const baseImageDropped = (image) => {
    return (dispatch, getState) => {
        readImage(image[0]).then((imageData) => {
            dispatch(baseImageDroppedSuccess({file: image[0], data: imageData}))
            const { comparison } = getState().app;
            if (comparison.image.file) {
                compareImages(imageData, comparison.image.data).then((result) => {
                    dispatch(imagesCompared(result))
                })
            }
        })
    }
}

export const comparisonImageDropped = (image) => {
    return (dispatch, getState) => {
        readImage(image[0]).then((imageData) => {
            dispatch(comparisonImageDroppedSuccess({file: image[0], data: imageData}))
            const { base } = getState().app;
            if (base.image.file) {
                compareImages(base.image.data, imageData).then((result) => {
                    dispatch(imagesCompared(result))
                })
            }
        })
    }
}
