import React from 'react'

function Navbar(props) {
  return (
    <>
    <nav className="navbar bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href=" ">
      {props.title}
    </a>
  </div>
</nav>
    </>
  )
}

export default Navbar