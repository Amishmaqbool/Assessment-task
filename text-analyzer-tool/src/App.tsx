import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const pronounsToCount = ['he', 'she', 'it', 'they', 'you', 'we', 'i'];

const App = () => {

  const [textValue, setTextValue] = useState('');
  const [words, setWords] =useState(0)
  const [characters ,setCharacters] =useState(0)
  const [sentences, setSentences]  = useState(0)
  const [paragraphs, setParagraphs] = useState(0)
  const [pronouns, setPronouns] = useState(0)
 const [readTime , setReadTime] = useState(0)
 const [longestWord , setLongestWord] = useState('')
  const handleChange = (value:string) => {
    setTextValue(value)
   
    }

const worldLength =() =>{
  var wordsCount = textValue.split(/\s+/)
  setWords(wordsCount.length)
  console.log("words",words)
}

const charactersPrint = ()=> {
  var  characterCount = textValue.length
  setCharacters(characterCount)
}
const sentencesPrint = () => {
  var sentencesCount : any = textValue.split(/[.!?]/).filter(Boolean);
  console.log(sentencesCount.length , "sentence count")
  setSentences(sentencesCount.length)
}
const paragraphPrint =()=> {
var paragraphCount = textValue.split('\n').filter(Boolean);
setParagraphs(paragraphCount.length)
}
const pronounPrint = () => {
  const pronounRegex = new RegExp('\\b(' + pronounsToCount.join('|') + ')\\b', 'gi');
  const pronounMatches = textValue.match(pronounRegex) || [];
  setPronouns(pronounMatches.length);
}
const readingTime = () =>{
  const wordsPerMinute = 200;
  setReadTime(Math.ceil(worldLength.length / wordsPerMinute));
}
const longestWordCount = () => {
  var wordsText = textValue.split(/\s+/)
  const longest = wordsText.reduce((longest, word) =>
  word.length > longest.length ? word : longest
);
setLongestWord(longest)
}
useEffect(() => {
  longestWordCount()
  readingTime()
  worldLength()
  pronounPrint()
  charactersPrint()
  sentencesPrint()
  paragraphPrint()
}, [textValue])





  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox worldLength={words}  characters={characters} sentences={sentences} paragraph={paragraphs} pronouns={pronouns}/>
          <TextArea  handleChange={handleChange} />
          <BottomResultBox readingTime={readTime} longestWord={longestWord}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
