import React from 'react'
import './Search.scss'

function Search({setSearch}) {
  function setValue(e){
    setSearch(e.target.search.value);
    e.preventDefault()
  }
  return (
    <div className='Search'>
        <h2>Qidirish</h2>
        <form action="#" onSubmit={setValue}>
            <input name='search' type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
            <button> <i className="bi bi-search"></i> Izlash</button>
        </form>
    </div>
  )
}

export default Search