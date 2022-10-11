import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import CoverPic from '../../images/cover-pic.jpg'
import Quizes from '../Quizes/Quizes'
import './Home.css'
const Home = () => {
  const quizes = useLoaderData([])
  const { data } = quizes
  const navigate = useNavigate()
  const handleStartToClick = (id) => {
    navigate(`/quizes/${id}`)
  }
  return (
    <div>
      <div className="cover_container mt-5 d-flex align-items-center justify-content-around flex-column flex-sm-column text-sm-center text-center flex-md-row">
        <div className="">
          <h2 className="fs-1 fst-italic">Welcome to Quiz Land</h2>
          <p className="text-secondary lh-xl">
            Welcome to our site Quiz Land. In our site you can learn many things
            about programming.You can play many quiz games.To start the game,
            Please go to the home page.
          </p>
        </div>
        <div>
          <img src={CoverPic} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="mb-5 container-fluid cart_container">
        {data.map((quizes) => (
          <Quizes
            key={quizes.id}
            quizes={quizes}
            handleStartToClick={handleStartToClick}
          ></Quizes>
        ))}
      </div>
    </div>
  )
}

export default Home
