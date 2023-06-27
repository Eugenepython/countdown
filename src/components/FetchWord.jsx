
import React, { useState, useEffect } from 'react';

import sweetsoul from '../assets/sweetsoul.jpg'
import cat from '../assets/cat.jpg'
import clockFace from '../assets/clockFace.jpg'
import background from '../assets/background.jpg'

function FetchWord() {

const [theWord, setTheWord] = useState('')
const [words, setWords] = useState('')
const [value, setValue] = useState('')
const [showQuiz, setShowQuiz] = useState(false)
const [givesUp, setGivesUp] = useState(false)
const [showStart, setShowStart] = useState(true)
const[correct, setCorrect] = useState(false)
const [seconds, setSeconds] = useState(0)
const [isRunning, setIsRunning] = useState(false);
const [degrees, setDegrees] = useState(0)
const[theAnswer, setTheAnswer] = useState('')
const [definition, setDefinition] = useState('')
const [isLoading, setIsLoading] = useState(false);
const [dictionaryWord, setDictionaryWord] = useState('')
const [hardWord, setHardWord] = useState('TOUGH')


function placeWord(){
  const hardWords = ['tough', 'hard', 'difficult', 'complicated', 'challenging'];
  const randomIndex = Math.floor(Math.random() * hardWords.length);
  //console.log(hardWords[randomIndex])

  setHardWord(hardWords[randomIndex])

  console.log(hardWord)

  setSeconds(0)
  setDegrees(0)
  setIsRunning(true)
  setShowQuiz(true)
  setShowStart(false)
  setGivesUp(false)
  setCorrect(false)
  setTheAnswer('')
  //anagramAnswer.innerHTML = ''
  fetch('https://random-word-api.herokuapp.com/word?length=8')
  .then(response => response.json())
  .then(data => {
    //console.log(data[0]);
    setTheWord(data[0])
    
  })
}

useEffect(() => {
  if (theWord !== ''){
    setIsLoading(true);
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${theWord}`)
  .then(response => response.json())
  .then(data => {
    //console.log(data[0].word)
    //console.log("the word is " + theWord)  
    if (data[0].word === theWord) {
    //console.log(data[0].meanings[0].definitions[0].definition)
    setDictionaryWord(data[0].word)
    setDefinition(data[0].meanings[0].definitions[0].definition)
    } else {
      setDefinition('no definition found')
    }
})
.finally(() => {
  setIsLoading(false); // Stop loading
});
}
console.log("the Definition of   " + theWord + " is " + definition)
}, [ theWord])


useEffect(() => {
  if (isRunning) {
const interval = setInterval(() => {
  setSeconds(prevSeconds => prevSeconds + 1);
  setDegrees (prevDegree => prevDegree + 360/60)
}, 1000);
return () => {
  clearInterval(interval);
};
  }
}, [isRunning]);


useEffect(() => {
  if (theWord !== '') {
  let arr = theWord.split('')
  let randomArray = (arr.sort((a, b) => 0.5 - Math.random()))
  let newWords = randomArray.map(x => <div className = 'square'>{x}</div>);
  //console.log(newWords)
  setWords(newWords)
  }
}, [theWord]);


useEffect(() => {
  if (seconds === 60) {
    setIsRunning(false)
    setShowQuiz(false)
    setShowStart(true)
    setGivesUp(true)

    //anagramAnswer.innerHTML = `<div className = 'gotItWrong'>${theWord}</div>`
    setTheAnswer(<div className = 'gotItWrong'>You ran out of time! The answer was: "{theWord}"</div>)
  }} , [seconds])



function handleChange(event){
 setValue(event.target.value)
 //console.log(value)
 //console.log(theWord)
}


useEffect(() => {
if(theWord.length >0 && value === theWord){
  //anagramAnswer.innerHTML = `<div className = 'gotItRight'>${theWord}</div>`
  setTheAnswer(<div className = 'gotItRight'> "{theWord}" <br></br>Well done!</div>)
  setShowQuiz(false)
  setValue('')
  setShowStart(true)
  setCorrect(true)
  setIsRunning(false) 
}
}, [value])




function giveUp(){
console.log(theWord)
//anagramAnswer.innerHTML = `<div className = 'gotItWrong'>${theWord}</div>`
setTheAnswer(<div className = 'gotItWrong'> That was {hardWord}! The answer was "{theWord}"</div>)
setGivesUp(true)
setShowQuiz(false)
setShowStart(true)
setIsRunning(false)

}


    return (
      <>
        <div>

        <button className = 'newAnagram' style = {{display : showStart ? 'block' : 'none' }} onClick={() => placeWord()}>Get New Anagram</button>
      <button className = 'giveUp' style = {{display : showQuiz ? 'block' : 'none' }} onClick = {() => {giveUp()}}>Give up?</button>
     
      <div className = 'clockHolder'>
     <div className="pie" style={{ background: `conic-gradient( red ${degrees}deg, transparent ${degrees}deg 
      ${360 - degrees}deg)` }}>
    <img  className = 'pie' src = {clockFace}></img>
      </div>
      </div>

     <div className = 'anagramAndInput' style = {{ display: showQuiz ? 'block' : 'none'}}>      
     <div className = 'wordHolder'>{words}</div>
     <div    style = {{ display: givesUp ? 'none' : 'block'}}>
        <input className = 'theInputBox' 
            type="text"
            value = {value}
            onChange={handleChange}
     ></input>
     </div>
  </div>

     <div className = 'wordHolder'>{givesUp || correct ? words : ''}</div>
    
<div>{theAnswer}</div>
  
     <h1 className = 'timer' style = {{display : showQuiz ? 'block' : 'none' }}>{seconds} seconds</h1>

   <div style = {{display : showStart ? 'block' : 'none' }}>



   <div>
  {isLoading === true ? (
    <div>Loading...</div>
  ) : isLoading === false && dictionaryWord === theWord ? (
    <p><span  className = 'definition'>{definition}</span></p>
  ) : null}
</div>



</div>
     </div>
      
      </>
    )
  }
  
  export default FetchWord

