import React from 'react'

const Review = (props) => {
  return (
    <div id='reviewCard'>
      <div>Username: {props.data.username} </div>
      <div>Rating: {props.data.stars} </div>
      <div>Review: {props.data.comments} </div>
    </div>
  )
}

export default Review