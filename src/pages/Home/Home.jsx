import React, { useState } from 'react'
import Search from '../../components/Search/Search'
import AdibCard from '../../components/AdibCard/AdibCard'
import { adibData } from '../../lib/adib'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import { Link } from 'react-router-dom'

function Home() {
  const [search,setSearch] = useState(null)
  console.log(search);
  return (
    <div className='home'>
        <div className="container">
          <Slider/>
          <Search setSearch={setSearch}/>
        <ul className='home__list'>
          {
            search == null ?adibData?.map((item,index)=>(
              <li className='home__item' key={index}>
                <Link to={`/adib-detail/${item.id}`}>
                <AdibCard item={item}/>
                </Link>
              </li>
            )): 
            
           adibData?.filter((i)=> i.name.toLowerCase().includes(search.toLowerCase())).map((item,index)=>(
            <li className='home__item' key={index}>
                <Link to={`/adib-detail/${item.id}`}>
                <AdibCard item={item}/>
                </Link>
              </li>
           ))
          }
        </ul>
        </div>
    </div>
  )
}

export default Home