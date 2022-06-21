import React from 'react';
import './lesson1.css';

import ChToEng_Card from '../Card/ch-to-eng';
import lesson1 from '../../Data/data1';


const Lesson1_Ch_Eng = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals</h2>
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
        </div>

      </div>
    )
}

export default Lesson1_Ch_Eng;