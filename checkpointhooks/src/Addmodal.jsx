import React from 'react'

const Modal = ({el,setaddmodal}) => {
  return (
    <div className='modal'>
      <div className="box_modal">
        <button onClick={()=>setaddmodal(false)} >apply</button>
        <h1>title: {el.title} </h1>
        <h1>descripition: {el.descripition} </h1>
      </div>
    </div>
  )
}

export default AddModal