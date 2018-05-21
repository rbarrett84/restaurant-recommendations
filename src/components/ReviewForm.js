import React from 'react'

const ReviewForm = props => {
  return (
    <label>{props.label}
      <Textfield
        label='Name'
        name={props.name}
      />

      <Textfield
        label='Rating'
        rating={props.rating}
      />

      <Textfield
        label="Review"
        text={props.text}
      />
    </label>
  )
}

export default ReviewForm
