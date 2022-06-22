import React from 'react';
import './lesson1.css';

import EngToCh_Card from '../Card/eng-to-ch';
import lesson1 from '../../Data/data1';


const Lesson1_Eng_Ch = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals - Chinese to Pinyin</h2>
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
        </div>

      </div>
    )
}

export default Lesson1_Eng_Ch;