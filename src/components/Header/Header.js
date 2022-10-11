import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className="d-flex justify-content-between flex-sm-column text-sm-center flex-column text-center flex-md-row navbar">
      <h2 className="header_title">Quizz Land</h2>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  )
}

export default Header
