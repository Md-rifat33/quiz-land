import React from 'react'
import QuizOption from '../QuizOption/QuizOption'
import './QuizDetail.css'
const QuizDetail = ({ quizs }) => {
  const { question, options, id } = quizs
  console.log(quizs)
  return (
    <div className="quiz">
      <div>
        <h4 className="text-center">{question}</h4>
      </div>
      <div className="quiz_suggestion row ">
        {options.map((option, index) => (
          <QuizOption option={option} id={id} index={index}></QuizOption>
        ))}
      </div>
    </div>
  )
}

export default QuizDetail
