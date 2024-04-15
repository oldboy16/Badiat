import React, { useState } from "react";
import Slider from "../../components/Slider/Slider";
import "./Books.scss";
import Search from "../../components/Search/Search";
import { bookData } from "../../lib/books";
import { adibData } from "../../lib/adib";
import { Link } from "react-router-dom";

function Books() {
  const [search,setSearch] = useState(null)
  return (
    <div className="books">
      <div className="container">
        <Slider />
        <Search setSearch={setSearch}/>
        <ul className="books__list">
          {
          search == null? bookData?.map((item, index) => (
            <li key={index} className="books__item">
              <Link to={`/book-detail/${item.id}`}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <p>{adibData.find((k)=> k.id == item.adibId).name}</p>
              <span>4.1 • 3400 ta fikrlar</span>
              </Link>
            </li> 
          )):
          bookData?.filter((i)=> i.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
            <li key={index} className="books__item">
              <Link to={`/book-detail/${item.id}`}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <p>{adibData.find((k)=> k.id == item.adibId).name}</p>
              <span>4.1 • 3400 ta fikrlar</span>
              </Link>
            </li> 
          ))
        }
        </ul>
      </div>
    </div>
  );
}

export default Books;
