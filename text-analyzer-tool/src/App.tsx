import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {

  const [textValue, setTextValue] = useState('');
  const [words, setWords] =useState(0)
  const [characters ,setCharacters] =useState(0)
  const [sentences, setSentences] = useState(0)
  const [paragraphs, setParagraphs] = useState(0)
  const [pronouns, setPronouns] = useState(0)

  const handleChange = (value:string) => {
    setTextValue(value)
   
    }

const worldLength =() =>{

  var wordsCount = textValue.split(/\s+/)

  setWords(wordsCount.length)
  console.log("words",words)
}

useEffect(() => {
  worldLength()
}, [textValue])





  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox worldLength={words}  />
          <TextArea  handleChange={handleChange} />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
