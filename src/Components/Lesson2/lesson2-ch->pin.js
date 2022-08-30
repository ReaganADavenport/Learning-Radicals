import React from 'react';
import './lesson2.css';

import ChToPin_Card from '../Card/ch-to-pin';
import lesson2 from '../../Data/data2';
import arrow_right from '../../Assets/arrow-right.png';
import arrow_left from '../../Assets/arrow-left.png';


const Lesson2_Ch_Pin = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 2 Radicals - Chinese to Pinyin</h2>
        <div className='board'>

          {lesson2.lesson2Data.map((item, index) => {
              return(
                <ChToPin_Card 
                  itemChinese={item.chinese} 
                  itemPinyin={item.pinyin} 
                  itemEnglish={item.english}
                  item={item} 
                  key={index} 
                  handleClick={handleClick}>
                </ChToPin_Card>
              )
          })}
          <div className='Next'>
            <h2>Lesson 2 - English to Chinese</h2>
            <a href='/lesson2/eng-to-ch'> <img src={arrow_right} className="arrow"></img> </a>
            <h2>Lesson 1 - Chinese to English</h2>
            <a href='/lesson2/ch-to-eng'> <img src={arrow_left} className="arrow"></img> </a>
          </div>
        </div>

      </div>
    )
}

export default Lesson2_Ch_Pin;