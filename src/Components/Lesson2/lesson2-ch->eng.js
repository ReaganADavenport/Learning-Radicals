import React from 'react';
import './lesson2.css';

import ChToEng_Card from '../Card/ch-to-eng';
import lesson2 from '../../Data/data2';
import arrow_right from '../../Assets/arrow-right.png';
import arrow_left from '../../Assets/arrow-left.png';



const Lesson2_Ch_Eng = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 2 Radicals - Chinese to English</h2>
        <div className='board'>

          {lesson2.lesson2Data.map((item, index) => {
              return(
                <ChToEng_Card 
                  itemChinese={item.chinese} 
                  itemPinyin={item.pinyin} 
                  itemEnglish={item.english}
                  item={item} 
                  key={index} 
                  handleClick={handleClick}>
                </ChToEng_Card>
              )
          })}

          <div className='Next'>
            <h2>Lesson 2 - Chinese to Pinyin</h2>
            <a href='/lesson2/ch-to-pin'> <img src={arrow_right} className="arrow"></img> </a>
            <h2>Lesson 2 - Study</h2>
            <a href='/lesson2/study'> <img src={arrow_left} className="arrow"></img> </a>
          </div>
        </div>
       
      </div>
    )
}

export default Lesson2_Ch_Eng;