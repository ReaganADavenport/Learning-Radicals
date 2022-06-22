import React from 'react';
import './lesson1.css';

import ChToEng_Card from '../Card/ch-to-eng';
import lesson1 from '../../Data/data1';
import arrow_right from '../../Assets/arrow-right.png';



const Lesson1_Ch_Eng = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals - Chinese to English</h2>
        <div className='board'>

          {lesson1.lesson1Data.map((item, index) => {
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
            <h2>Lesson 1 - Chinese to Pinyin</h2>
            <a href='/lesson1/ch-to-pin'> <img src={arrow_right} className="arrow"></img> </a>
          </div>
        </div>
       
      </div>
    )
}

export default Lesson1_Ch_Eng;