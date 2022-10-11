import React from 'react'
import './Blogs.css'
const Blogs = () => {
  return (
    <div className="row container">
      <div className="text-center mt-5 blogs col-lg-12 col-md-5 col-sm-12">
        <h2 className="fs-2 fst-italic">
          1. What is the purpose of the react router?
        </h2>
        <p className="fst-italic">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>
      <div className="text-center mt-5 blogs col-lg-12 col-md-5 col-sm-12">
        <h2 className="fs-2 fst-italic">2. How does context api work?</h2>
        <p className="fst-italic">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on.
        </p>
      </div>
      <div className="text-center mt-5 blogs col-lg-12 col-md-6 col-sm-12">
        <h2 className="fs-2 fst-italic">
          3. Write something about the useRef hook in react
        </h2>
        <p className="fst-italic">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.The useRef is
          a hook that allows to directly create a reference to the DOM element
          in the functional component. Syntax: const refContainer =
          useRef(initialValue); The useRef returns a mutable ref object. This
          object has a property called .
        </p>
      </div>
    </div>
  )
}

export default Blogs
