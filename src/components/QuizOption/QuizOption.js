import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './QuizOption.css'
const QuizOption = ({ option, id, index, correctAnswer }) => {
  const handleClick = () => {
    if (correctAnswer === option) {
      const notify = toast('Well-Done')
    } else {
      const notified = toast('This answer is wrong.Please, try another one')
    }
  }
  return (
    <div className="quiz_option col-sm-12 col-md-6 col-lg-6 form-check">
      <input
        className="form-check-input mt-2 ms-5"
        type="radio"
        name="flexRadioDefault"
        id={`${id}_${index}`}
      />
      <label
        onClick={handleClick}
        className="form-check-label ms-3"
        for={`${id}_${index}`}
      >
        {option}
      </label>
      <ToastContainer />
    </div>
  )
}

export default QuizOption
