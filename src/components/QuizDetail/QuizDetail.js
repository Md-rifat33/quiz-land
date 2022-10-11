import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import QuizOption from '../QuizOption/QuizOption'
import './QuizDetail.css'
const QuizDetail = ({ quizs }) => {
  const { question, options, id, correctAnswer } = quizs
  const notify = () => toast(`${correctAnswer}`)
  return (
    <div className="quiz container">
      <div className="d-flex justify-content-around align-items-center flex-column flex-md-row">
        <h4 className="text-center">{question}</h4>
        <FontAwesomeIcon
          className="eye_icon"
          onClick={notify}
          icon={faEye}
        ></FontAwesomeIcon>
        <ToastContainer></ToastContainer>
      </div>
      <div className="quiz_suggestion row">
        {options.map((option, index) => (
          <QuizOption
            option={option}
            id={id}
            index={index}
            correctAnswer={correctAnswer}
          ></QuizOption>
        ))}
      </div>
    </div>
  )
}

export default QuizDetail
