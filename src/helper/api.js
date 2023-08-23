import reviews from '../example.json'

export const getReviews = () =>{
    return reviews;
}

export const getReviewsById = (reviewId) =>{
    return reviews.comments.find(({id}) => id == reviewId)
}