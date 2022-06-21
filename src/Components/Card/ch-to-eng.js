import React,{Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import './card.css';



class ChToEng_Card extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    

  render(){
    const { itemChinese, itemPinyin, itemEnglish} = this.props;
    
    return(
        
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div className='Card'>
         <div className='front'>
            <h1>{itemChinese}</h1>
          <button className='button' onClick={this.handleClick}>Click to flip</button>
            </div>
        </div>

        <div className='Card'>
            <div className='back'>
            <h1>{itemPinyin}</h1>

            <h1>{itemEnglish}</h1>
            <button className='button' onClick={this.handleClick}>Click to flip</button>
            </div>
        </div>
        </ReactCardFlip>   


       
    )
  }
}

export default ChToEng_Card;