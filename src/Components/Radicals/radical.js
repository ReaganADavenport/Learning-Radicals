import React from 'react';
import './radical.css';

import Card from '../Card/card';
import radical from '../../Data/radicals';


const Radical = ({handleClick}) => {

    return(
        <div className='radical'>
        <h2>Lesson 1 Radicals</h2>
        <div className='board'>

          {radical.radicalData.map((item, index) => {
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