import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='wholePart-nav'>
      <div className='leftPart-nav'>
        <h2>Boardroom</h2>
        <hr />
        <div>
          <a href="">All</a>
          <a href="">Tech</a>
          <a href="">Meta</a>
        </div>
      </div>
      <div className='rightPart-nav'>
        <p>status</p>
        <hr />
        <a href="">Rules & FAQ</a>
      </div>
    </div>
  )
}

export default Nav