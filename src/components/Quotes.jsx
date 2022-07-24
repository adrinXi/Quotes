import React from 'react'

const Quotes = ({randomQuotes, randomColors, randomAll}) => {

  // console.log(randomColors);

  const objectStyle = {
    color: randomColors
  }

  const objectBtnStyle = {
    backgroundColor: randomColors
  }

  return (
    <div>
        <div className='card' style={objectStyle}>
          <div className='card__quotes'>
            <i className="fa-solid fa-quote-left"></i>
            <p className='card__phrase'>{randomQuotes.quote}</p>
          </div>
          <div className='card__abtn'>
            <span className='card__author'><b>{randomQuotes.author}</b></span>
            <button onClick={randomAll} style={objectBtnStyle} className='card__btn'>&#62;</button>
          </div>  
        </div>
    </div>
  )
}

export default Quotes