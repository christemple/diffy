export const BASE_IMAGE_DROPPED = 'BASE_IMAGE_DROPPED'
export const BASE_IMAGE_DROPPED_SUCCESS = 'BASE_IMAGE_DROPPED_SUCCESS'
export const COMPARISON_IMAGE_DROPPED = 'COMPARISON_IMAGE_DROPPED'
export const COMPARISON_IMAGE_DROPPED_SUCCESS = 'COMPARISON_IMAGE_DROPPED_SUCCESS'

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

export const baseImageDroppedSuccess = (image) => ({
    type: BASE_IMAGE_DROPPED_SUCCESS,
    image
}) 

export const comparisonImageDroppedSuccess = (image) => ({
    type: COMPARISON_IMAGE_DROPPED_SUCCESS,
    image
}) 


// THUNKS
export const baseImageDropped = (image) => {
    return (dispatch) => {
        readImage(image[0]).then((imageData) => {
            dispatch(baseImageDroppedSuccess({file: image[0], data: imageData}))
        })
    }
}

export const comparisonImageDropped = (image) => {
    return (dispatch) => {
        readImage(image[0]).then((imageData) => {
            dispatch(comparisonImageDroppedSuccess({file: image[0], data: imageData}))
        })
    }
}
