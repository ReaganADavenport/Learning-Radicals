import React from 'react';
import './lesson1.css';

import ChToPin_Card from '../Card/ch-to-pin';
import lesson1 from '../../Data/data1';


const Lesson1_Ch_Pin = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals - Chinese to Pinyin</h2>
        <div className='board'>

          {lesson1.lesson1Data.map((item, index) => {
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
        </div>

      </div>
    )
}

export default Lesson1_Ch_Pin;