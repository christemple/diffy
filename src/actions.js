export const BASE_IMAGE_DROPPED = 'BASE_IMAGE_DROPPED'
export const COMPARISON_IMAGE_DROPPED = 'COMPARISON_IMAGE_DROPPED'

export const baseImageDropped = (image) => ({
    type: BASE_IMAGE_DROPPED, image
})

export const comparisonImageDropped = (image) => ({
    type: COMPARISON_IMAGE_DROPPED, image 
})