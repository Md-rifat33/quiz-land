import React from 'react'
import { useLoaderData } from 'react-router-dom'
import QuizDetail from '../QuizDetail/QuizDetail'
import './Quiz.css'

const Quiz = () => {
  const quiz = useLoaderData([])
  const { data } = quiz
  const { questions } = data
  console.log(questions)
  return (
    <div className="quiz_container">
      {questions.map((quizs) => (
        <QuizDetail quizs={quizs}></QuizDetail>
      ))}
    </div>
  )
}

export default Quiz
