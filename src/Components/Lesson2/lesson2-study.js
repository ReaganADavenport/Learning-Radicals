import React from 'react';
import './lesson2.css';

import Study_Card from '../Card/study-card';
import lesson2 from '../../Data/data2';
import arrow from '../../Assets/arrow-right.png';


const Lesson2 = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 2 Radicals</h2>
        <div className='board'>

          {lesson2.lesson2Data.map((item, index) => {
              return(
                <Study_Card 
                  itemChinese={item.chinese} 
                  itemPinyin={item.pinyin} 
                  itemEnglish={item.english}
                  item={item} 
                  key={index} 
                  handleClick={handleClick}>
                </Study_Card>
              )
          })}
          <div className='Next'>
            <h2>Lesson 2 - Chinese to English</h2>
            <a href='/lesson2/ch-to-eng'> <img src={arrow} className="arrow"></img> </a>
          </div>
          
        </div>

      </div>
    )
}

export default Lesson2;