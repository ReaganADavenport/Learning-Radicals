import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { itemChinese, itemPinyin, itemEnglish} = this.props;
    
    return(
        <div className="Card">

          <h1>{itemChinese}</h1>

           <h1>{itemPinyin}</h1>

           <h1>{itemEnglish}</h1>


        </div>
    )
  }
}

export default Card;