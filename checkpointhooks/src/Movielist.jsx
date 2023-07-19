import React from 'react'
import Card from './MovieCard'
const Cards = ({movie}) => {
  return (
    <div className='cards'>
      {movie.map(el=><Card el={el}  />)}
    </div>
  )
}
export default Cards