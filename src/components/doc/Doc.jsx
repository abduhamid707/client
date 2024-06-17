import React from 'react'
import RarImg from '../../assets/icons/rar.png'
import { FaDownload } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import './style.css'


const Doc = () => {
  return (
    <div className='doc'>
    <div className='left'>
     <div className='rar'>
        <img src={RarImg}/>
     </div>
     <div className='txt'>
        <div className='top'>
            <h3>Madaniy va tabiiy merosni muhofaza qilish bo'yicha xalqaro konventsiya (1972)</h3>
        </div>
        <div className='bottom'>
            <p className='calendar'><FaCalendar/> 22 июнь 2022г</p>
            <p className='download_count'><FaDownload/> Количество скачиваний: 1 694</p>
        </div>
     </div>
    </div>
    <div className='right'>
        <FaDownload/>
        Скачать документ
    </div>
</div>
  )
}

export default Doc
