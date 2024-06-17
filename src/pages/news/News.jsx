import React from 'react'
import './style.css'
import NewsPageImg from '../../assets/icons/news-page.png'
import Links from '../../components/links/Links'
import { FaCalendar } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import NewsCard from '../../components/news-card/NewsCard'


const News = () => {
  return (
    <div className='page news-page'>
      <section className='section_one'>
        <div className='overlay'>
          <div className='container'>
            <div className='left'>
              <h2>YANGILIKLAR</h2>
            </div>
            <div className='right'>
              <Links />
            </div>
          </div>
        </div>
      </section>
      <section className='section_two'>
        <div className='container'>
          <h3 className='title'>NASHRLAR SONI: 1694</h3>
          <div className='news_wrp'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className='pagination_btns'>
            <div className='left_btns'>
              <button className='prev'>
                <FaChevronLeft /> Пред. стр
              </button>
              <button className='next'>След. стр <FaChevronRight /> </button>
            </div>
            <div className='right_btns'>
              <div className='left_page'>
                <p>страница</p>
                <button>3</button>
                <p>из 157</p>
              </div>
              <button className='go_'>Перейти <FaChevronRight /></button>
            </div>
          </div>
          <div className="back_navigate">
            <button className="home"><FaHome /> Bosh sahifa</button>
            <button className="next"> <FaChevronRight /> </button>
            <button className="about">Normativ xujjatlar</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
