import React from 'react'
import './AdibCard.scss'

function AdibCard({item}) {
  return (
    <div className='AdibCard'>
        <img src={item.img} alt="" />
        <div className="card__inner">
        <h3>{item.name}</h3>
        <p>{item.life}</p>
        <div>
            <span><i className="bi bi-book-fill"></i>{item.books}</span>
            <span><i className="bi bi-headphones"></i>{item.eBooks}</span>
        </div>
        </div>
    </div>
  )
}

export default AdibCard