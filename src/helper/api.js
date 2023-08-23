import reviews from '../example.json'

export const getReviews = () =>{
    return reviews;
}

export const getReviewsById = (reviewId) =>{
    return reviews.find((review) => review.id === reviewId )
}