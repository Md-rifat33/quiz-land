import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Quizes.css'
const Quizes = ({ quizes, handleStartToClick }) => {
  const { logo, name } = quizes
  return (
    <div className="">
      <div
        className="card col-lg-4 col-md-6 col-sm-12 mt-3"
        style={{ width: '20rem' }}
      >
        <img src={logo} className="card-img-top  card_image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => handleStartToClick(quizes.id)}
            className="btn btn-primary w-100 fw-bold d-flex align-items-center justify-content-evenly"
          >
            Start Quiz
            <FontAwesomeIcon
              className="ms-3"
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quizes
