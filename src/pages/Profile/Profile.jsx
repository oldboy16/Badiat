import React from "react";
import "./Profile.scss";
import Slider from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
import { adibData } from "../../lib/adib";

function Profile() {
  let locData = JSON.parse(window.localStorage.getItem("locData"));
  return (
    <div className="profile">
      <div className="container">
        <Slider />
        <ul className="profile__list">
          {
            locData?.map((item,index)=>(
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

export default Profile;
