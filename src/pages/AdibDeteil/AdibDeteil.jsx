import React from "react";
import "./AdibDeteil.scss";
import { Link, useParams } from "react-router-dom";
import { adibData } from "../../lib/adib";
import { bookData } from "../../lib/books";

function AdibDeteil() {
  const { id } = useParams();
  console.log(id);
  let finAdib = adibData.find((item) => item.id == id);
  let finBooks = bookData.filter((item) => item.adibId == id);
  return (
    <div className="adib__detail">
      <div className="container ad__inner">
        <div className="ad__left">
          <img src={finAdib.img} alt="" />
          <div>
            <span>{finAdib.life}</span>
          </div>
        </div>
        <div className="ad__right">
          <h2>{finAdib.name}</h2>
          <p>{finAdib.des}</p>
          <p>
            Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
            ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
            muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
            qaytmaydi“ qissasi boʻldi.
          </p>
          <h2>Asarlari</h2>
          <div className="ad__list__wrapper">
            <ul
              className="ad__list"
              style={{ width: `${175 * finBooks.length}px` }}
            >
              {finBooks?.map((item, index) => (
                  <li key={index} className="ad__item">
                    <Link to={`/book-detail/${item.id}`}>
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <p>4.1 • 3400 ta fikrlar</p>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdibDeteil;
