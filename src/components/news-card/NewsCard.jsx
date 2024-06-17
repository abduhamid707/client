import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import "./style.css";

const NewsCard = () => {
  return (
    <div className="new_card">
      <div className="left">
        <img src="https://picsum.photos/570/400" />
      </div>
      <div className="right">
        <div className="top">
          <h3 className="heading">Navroʼz bayramiga bagʼishlangan koʼrgazma</h3>
          <p className="desc">
            Toshkent Fotosuratlar uyida Navroʼz bayramiga bagʼishlangan
            koʼrgazma ochildi. Koʼrgazmadan Аbdugʼani Jumaev, Vladimir
            Shlosberg, Rustam Sharipov, Rustam Shagaev, Vladimir Goncharenko,
            Sultonboy Dexkanov, Xusniddin Аtoev kabi taniqli fotoustalar,
            shuningdek, Liliya Аxsanova, Gayana Аvanesyan, Yevgeniy Ten kabi
            havaskorlarning ijodiy ishlari oʼrin olgan.
          </p>
        </div>
        <div className="bottom">
          <ul className="left">
            <li>
              <FaCalendar /> 22 июнь 2022г
            </li>
            <li>
              <FaShare /> Поделитсья
            </li>
          </ul>
          <div className="right">
            <button>BATAFSIL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
