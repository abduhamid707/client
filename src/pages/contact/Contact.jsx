import React from "react";
import "./style.css";
import Links from "../../components/links/Links";
import ContactBg from "../../assets/icons/contact-bg.png";
import LocationImg from "../../assets/icons/location.png";
import { CiLocationOn } from "react-icons/ci";
import { FaClock, FaSubway } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="page contact-page">
      <section className="section_one">
        <div className="overlay">
          <div className="container">
            <div className="left">
              <h2>ALOQA</h2>
            </div>
            <div className="right">
              <Links />
            </div>
          </div>
        </div>
      </section>
      <section className="section_two">
        <div className="container">
          <img src={LocationImg} className="location" />
          <div className="contacts_">
            <div className="element">
              <h4>ADRES</h4>
              <ul>
                <li>
                  <CiLocationOn /> Toshkent sh., Amir Temur shoh ko'chasi, 16-uy
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>ISH VAQTI</h4>
              <ul>
                <li>
                  <FaClock />
                  Ish kuni: Du-Sh
                </li>
                <li>&nbsp; &nbsp; &nbsp; Ish vaqti: 09:00-18:00</li>
                <li> &nbsp; &nbsp; &nbsp; Dam olish kuni: Yakshanba</li>
              </ul>
            </div>
            <div className="element">
              <h4>KONTAKTLAR</h4>
              <ul>
                <li>
                  <FaPhone /> Tel: +998 71 236 74 36
                </li>
                <li>&nbsp; &nbsp; &nbsp; Faks: +998 71 233 62 81</li>
                <li>
                  <MdOutlineEmail /> E-pochta: tmi2007@mail.ru
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>MALUMOT NUQTASI</h4>
              <ul>
                <li>
                  <FaRoute /> Toshknet davlat sharshunoslik universiteti
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>AVTOBUSLAR</h4>
              <li>
                <FaBus /> 51, 67, 93, 113, 144
              </li>
            </div>
            <div className="element">
              <h4>METRO</h4>
              <li>
                <FaSubway /> Oybek metro bekati
              </li>
            </div>
          </div>
          <div className="back_navigate">
            <button className="home">
              <FaHome /> Bosh sahifa
            </button>
            <button className="next">
              <FaChevronRight />
            </button>
            <button className="about">Aloqa</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
