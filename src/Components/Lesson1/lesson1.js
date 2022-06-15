import React from 'react';
import './lesson1.css';

import Card from '../Card/card';
import lesson1 from '../../Data/data1';


const Radical = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals</h2>
        <div className='board'>

          {lesson1.lesson1Data.map((item, index) => {
              return(
                <Card 
                  
                  itemChinese={item.chinese} 
                  itemPinyin={item.pinyin} 
                  itemEnglish={item.english}
                  item={item} 
                  key={index} 
                  handleClick={handleClick}>
                </Card>
              )
          })}
        </div>

      </div>
    )
}

export default Radical;