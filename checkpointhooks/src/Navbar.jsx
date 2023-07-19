import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ol>
        <li><input type="text" name="add" id="add" /></li>
        <li><button>add</button></li>
        <li>about</li>
      </ol>
    </div>
  )
}

export default Navbar

