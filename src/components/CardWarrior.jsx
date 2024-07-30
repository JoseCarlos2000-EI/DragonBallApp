import React from 'react'

const CardWarrior = ({image, id, name}) => {
  return (
        <div className="card-warrior">
            <img src = { image } alt = { id } />
            <h3> { name } </h3>
        </div>
  )
}

export default CardWarrior
