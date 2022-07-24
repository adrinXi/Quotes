import { useState } from 'react'
import './App.css'
import Quotes from './components/Quotes';
import indexQuotes from './json/indexQuotes.json'
import indexColors from './utils/color'

function App() {

  // esta es la funcion para calcular un indice random
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    // asi calculamos el elemento random
    return arr[indexRandom]
  }
  const quotesRandom = getRandomElement(indexQuotes);
  const quotesColors = getRandomElement(indexColors);

  const [randomQuotes, setRandomQuotes] = useState(quotesRandom)
  const [randomColors, setRandomColors] = useState(quotesColors)

  // console.log(randomQuotes, randomColors); 

  const getRandomAll = () => {
    const quotesRandom = getRandomElement(indexQuotes);
    const quotesColors = getRandomElement(indexColors);

    setRandomQuotes(quotesRandom)
    setRandomColors(quotesColors)
  }

  const objectBkColor = {
    backgroundColor: quotesColors
  }

  return (
    <div className="App" style={objectBkColor}>
      <Quotes 
        randomAll = {getRandomAll} 
        randomQuotes = {randomQuotes} 
        randomColors = {randomColors}/>
    </div>
  )
}

export default App
