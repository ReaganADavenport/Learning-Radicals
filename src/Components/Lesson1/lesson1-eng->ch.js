import React from 'react';
import './lesson1.css';

import EngToCh_Card from '../Card/eng-to-ch';
import lesson1 from '../../Data/data1';
import arrow_left from '../../Assets/arrow-left.png'


const Lesson1_Eng_Ch = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals - English to Chinese</h2>
        <div className='board'>

          {lesson1.lesson1Data.map((item, index) => {
              return(
                <EngToCh_Card 
                  itemChinese={item.chinese} 
                  itemPinyin={item.pinyin} 
                  itemEnglish={item.english}
                  item={item} 
                  key={index} 
                  handleClick={handleClick}>
                </EngToCh_Card>
              )
          })}
           <div className='Next'>
            <h2>Lesson 1 - Chinese to Pinyin</h2>
            <a href='/lesson1/ch-to-pin'> <img src={arrow_left} className="arrow"></img> </a>
          </div>
        </div>

      </div>
    )
}

export default Lesson1_Eng_Ch;