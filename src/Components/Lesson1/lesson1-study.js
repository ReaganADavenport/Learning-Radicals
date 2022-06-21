import React from 'react';
import './lesson1.css';

import Study_Card from '../Card/study-card';
import lesson1 from '../../Data/data1';


const Lesson1 = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals</h2>
        <div className='board'>

          {lesson1.lesson1Data.map((item, index) => {
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
        </div>

      </div>
    )
}

export default Lesson1;