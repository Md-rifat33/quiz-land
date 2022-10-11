import React from 'react'
import QuizOption from '../QuizOption/QuizOption'
import './QuizDetail.css'
const QuizDetail = ({ quizs }) => {
  const { question, options } = quizs
  console.log(options)
  return (
    <div className="quiz">
      <div>
        <h4 className="text-center">{question}</h4>
      </div>
      <div className="quiz_suggestion">
        {options.map((option) => (
          <QuizOption option={option}></QuizOption>
        ))}
      </div>
    </div>
  )
}

export default QuizDetail
