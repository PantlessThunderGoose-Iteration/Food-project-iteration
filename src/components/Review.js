import React from 'react'

const Review = (props) => {
  return (
    <div id='reviewCard'>
      <div>Username: {props.data.strUsername} </div>
      <div>Rating: {props.data.rating} </div>
      <div>Review: {props.data.strReview} </div>
    </div>
  )
}

export default Review