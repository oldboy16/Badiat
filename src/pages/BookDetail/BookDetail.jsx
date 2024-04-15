import React, { useState } from "react";
import "./BookDetail.scss";
import { Link, useParams } from "react-router-dom";
import { bookData } from "../../lib/books";
import BookSLider from "../../components/BookSLider/BookSLider";
import { adibData } from "../../lib/adib";

function BookDetail() {
  const [render,setRednder] = useState(false)
  const { id } = useParams();
  let findBook = bookData.find((item) => item.id == id);
  let filBooks = bookData.filter((item) => item.category == findBook.category);
  let locArr = []
  if(window.localStorage.getItem('locData')){
    locArr = JSON.parse(window.localStorage.getItem('locData'))
  }
  function setBook(a){
    setRednder(!render)
    
    if(!locArr.find((item)=> item.id == a.id)){
      locArr.push(a)
      window.localStorage.setItem('locData', JSON.stringify(locArr))
    }else{
      let delArr = locArr.filter((item)=> item.id != a.id)
      window.localStorage.setItem('locData', JSON.stringify(delArr))
    }
  }
  return (
    <div className="book__detail">
      <div className="container bd__inner">
        <img className="bd__banner" src={findBook.img} alt="" />
        <div className="bd__info">
          <h2 className="bd__title">{findBook.name}</h2>
          <p className="bd__name">
            {adibData.find((item) => item.id == findBook.adibId).name}
          </p>
          <p className="bd__about">
            <span>Sahifalar soni:</span> {findBook.page}
          </p>
          <p className="bd__about">
            <span>Chop etilgan:</span> {findBook.create}
          </p>
          <p className="bd__about">
            <span>Janri:</span> {findBook.category}
          </p>
          <p className="bd__about">
            <span>Nashriyot:</span> {findBook.publish}
          </p>
          <p className="bd__des">
            Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва
            собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат
            йигит-қизларининг хотирасига бағишланади. Роман воқеаларини қисқача
            сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар тиғизки, шошириб
            қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис
            қиласиз. Миллият, соф муҳаббат, кўринмас ва ошкор фожиалар, тарих,
            бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик
            даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва
            келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ
            кулдиради. Ўтган аср бошида Германияда ўқиган талабалар, улар
            маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига
            тортилади.
          </p>
          <div className="bd__formats">
            <div>
              <i className="bi bi-book-fill"></i>
              <p>Qog’oz kitob</p>
              <span>{findBook.price}</span>
            </div>
            <div>
              <i className="bi bi-headphones"></i>
              <p>Audio kitob</p>
              <span>{findBook.audio}</span>
            </div>
            <div>
              <i className="bi bi-file-earmark-pdf-fill"></i>
              <p>Elektron kitob</p>
              <span>{findBook.electron}</span>
            </div>
            <button onClick={()=> setBook(findBook)} className={locArr.find((i)=> i.id == findBook.id)? 'btn btn-danger':'btn btn-success'}>
              {locArr.find((i)=> i.id == findBook.id)? "Javondan o'chirish":"Javonga qo'shish"}
              </button>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="iqtiboslar">
          <div>
            <p>
              Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
              bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib
              o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini
              ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza
              olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
            </p>
          </div>
          <div>
            <p>
              Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq
              tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
            </p>
          </div>
        </div>
        <div className="container">
          <BookSLider data={filBooks}/>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
