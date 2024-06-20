import React from "react";
import { FaCalendar, FaShare } from "react-icons/fa";
import "./style.css";

const NewsCard = ({ news }) => {
  return (
    <div className="new_card">
      <div className="left">
        {/* <img src={news.main_img} alt={news.title_uz} /> */}
      </div>
      <div className="right">
        <div className="top">
          <h3 className="heading">{news.title_uz}</h3>
          <p className="desc">{news.text_uz}</p>
        </div>
        <div className="bottom">
          <ul className="left">
            <li>
              <FaCalendar /> {new Date(news.createdAt).toLocaleDateString()}
            </li>
            <li>
              <FaShare /> Поделиться
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
