import React from 'react'
import './QuizOption.css'
const QuizOption = ({ option, id, index }) => {
  console.log(`===index===`, index)
  return (
    <div className="quiz_option col-sm-12 col-md-6 col-lg-6 form-check">
      <input
        className="form-check-input mt-2"
        type="radio"
        name="flexRadioDefault"
        id={`${id}_${index}`}
      />
      <label className="form-check-label" for={`${id}_${index}`}>
        {option}
      </label>
    </div>
  )
}

export default QuizOption
