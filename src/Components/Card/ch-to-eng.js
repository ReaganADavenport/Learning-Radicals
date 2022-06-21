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
        <div className="Card">
         <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
         <YOUR_FRONT_CCOMPONENT>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_CCOMPONENT>


        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>

        </ReactCardFlip>
        

          <h1>{itemChinese}</h1>

           <h1>{itemPinyin}</h1>

           <h1>{itemEnglish}</h1>


        </div>
    )
  }
}

export default ChToEng_Card;