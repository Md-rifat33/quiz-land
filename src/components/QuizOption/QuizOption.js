import React from 'react'
import './QuizOption.css'
const QuizOption = ({ option }) => {
  return (
    <div className="quiz_option">
      <li>{option}</li>
    </div>
  )
}

export default QuizOption
