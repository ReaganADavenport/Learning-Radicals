import React,{Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import './card.css';



class ChToEng_Card extends Component {

          state = {
          guess: '',
          isFlipped: false,
          showAnswer: false
        };
        handleClick = this.handleClick.bind(this);
      
        changeGuess = guess => {
          const lowerCaseInput = guess.toLowerCase();
      
          this.setState({guess: lowerCaseInput});
      };


      displayAnswer = () => {
          this.setState({
            showAnswer: true
        })
      };

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped, showAnswer: !prevState.showAnswer }));
      }

      
    

  render(){
    const { itemChinese, itemPinyin, itemEnglish} = this.props;
    const { showAnswer, guess } = this.state;
    
    return(
        
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div className='Card'>
         <div className='front'>
            <h1>{itemChinese}</h1>
            <input
                type="text"
                className='guess-box'
                value={guess}
                onChange={e => this.changeGuess(e.target.value)}
            ></input>
          <button className='button' onClick={this.handleClick}>Click to flip</button>
            </div>
        </div>

        <div className='Card'>
            <div className='back'>
            {!!showAnswer ?
              <>
                <h1>{itemEnglish}</h1>
                {guess === itemEnglish ?
                <span>✅</span>
                :
                <span>❌</span>
              }
              </>
              :
              null
            }
            <h3>Your answer: {guess}</h3>
            <button className='button' onClick={this.handleClick}>Click to flip</button>
            </div>
        </div>
        </ReactCardFlip>   


       
    )
  }
}

export default ChToEng_Card;