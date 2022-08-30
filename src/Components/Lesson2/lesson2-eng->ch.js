import React from 'react';
import './lesson2.css';

import EngToCh_Card from '../Card/eng-to-ch';
import lesson2 from '../../Data/data2';
import arrow_left from '../../Assets/arrow-left.png'


const Lesson2_Eng_Ch = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 2 Radicals - English to Chinese</h2>
        <div className='board'>

          {lesson2.lesson2Data.map((item, index) => {
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
            <h2>Lesson 2 - Chinese to Pinyin</h2>
            <a href='/lesson2/ch-to-pin'> <img src={arrow_left} className="arrow"></img> </a>
          </div>
        </div>

      </div>
    )
}

export default Lesson2_Eng_Ch;