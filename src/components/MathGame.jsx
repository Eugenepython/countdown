
import React, { useState, useEffect } from 'react';

function MathGame() {

    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)
    const [fourth, setFourth] = useState(0)
    const [calculation, setCalculation] = useState([])
    const [yourAnswer, setYourAnswer] = useState()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false);
    const [ theAnswer, setTheAnswer ] = useState(0);
    const [ isFirstSorted, setIsFirstSorted ] = useState(false);
const [ isSecondSorted, setIsSecondSorted ] = useState(true);
const [ isThirdSorted, setIsThirdSorted ] = useState(true);
const [ isFourthSorted, setIsFourthSorted ] = useState(true);
const [ showFigure, setShowFigure ] = useState(false);
const [ showInitialPart, setShowInitialPart ] = useState(true);
const [ showNextPart, setShowNextPart ] = useState(false);
const [showFinalPart, setShowFinalPart] = useState(false);

function deLete() {
    setIsButtonDisabled(false);
    setShowSubmit(false);
    setCalculation(prevState => {
        return prevState.slice(0, -1)
    })
}

function firstFunction() {
    setCalculation(prevState => {
      const newState = [...prevState, first];
      return newState;
    });
  }

function secondFunction() {
setCalculation(prevState => {
const newState = [...prevState, second];
return newState;
});
}

function thirdFunction() {
setCalculation(prevState => {
    const newState = [...prevState, third];
    return newState;
    });
}

function fourthFunction() {
    setCalculation(prevState => {
        const newState = [...prevState, fourth];
        return newState;
        });
    }

function pLus() {
setCalculation(prevState => {
const newState = [...prevState, '+'];
return newState;
});
}

function miNus() {
setCalculation(prevState => {
const newState = [...prevState, '-'];
return newState;
});
}   

function mulTiply() {
setCalculation(prevState => {
const newState = [...prevState, '*'];
return newState;
});
}   

function diVide() {
setCalculation(prevState => {
    const newState = [...prevState, '/'];
    return newState;
    });
}

function leftBracket() {
setCalculation(prevState => {
    const newState = [...prevState, '('];
    return newState;
    });
}

function rightBracket() {
setCalculation(prevState => {
    const newState = [...prevState, ')'];
    return newState;
    });
}

function eQual() {
    //setCalculation(prevState => {
      //  const newState = [...prevState, '='];
        //return newState;
        //});
setIsButtonDisabled(true);
setShowSubmit(true);
}

function submit() {
    const equationString = calculation.join('');
    try {
      const finalCalculation = eval(equationString);
      if (typeof finalCalculation === 'number') {
        setYourAnswer(finalCalculation);
      } else {
        setYourAnswer('Error');
      }
    } catch (error) {
      setYourAnswer('Error');
    }
    console.log(yourAnswer);
    if (yourAnswer === theAnswer) {
      console.log("hurrah")
  }
}




function changeFirstBig() {
    setFirst(Math.floor(Math.random() * 100) + 1);
    setIsFirstSorted(true);
    setIsSecondSorted(false);

}
function changeFirstSmall() {
    setFirst(Math.floor(Math.random() * 10) + 1);
    setIsFirstSorted(true);
    setIsSecondSorted(false);
}

function changeSecondSmall() {
    setSecond(Math.floor(Math.random() * 10) + 1);
    setIsSecondSorted(true);
    setIsThirdSorted(false);
}

function changeSecondBig() {
    setSecond(Math.floor(Math.random() * 100) + 1);
    setIsSecondSorted(true);
    setIsThirdSorted(false);
}

function changeThirdSmall() {
    setThird(Math.floor(Math.random() * 10) + 1);
    setIsThirdSorted(true);
    setIsFourthSorted(false);
}

function changeThirdBig() {
    setThird(Math.floor(Math.random() * 100) + 1);
    setIsThirdSorted(true);
    setIsFourthSorted(false);
}

function changeFourthSmall() {
    setFourth(Math.floor(Math.random() * 10) + 1);
    setIsFourthSorted(true);
    setShowFigure(true)
}

function changeFourthBig() {
    setFourth(Math.floor(Math.random() * 100) + 1);
    setIsFourthSorted(true);
    setShowFigure(true)
}

function getTheTarget() {
  setTheAnswer(Math.floor(Math.random() * 999) + 1);
  setShowFigure(false);
  setShowInitialPart(false)
  setShowNextPart(true)
}


useEffect(() => {
    if (yourAnswer === theAnswer) {
        console.log("hurrah")
        setShowNextPart(false)
        setShowFinalPart(true)
    }
}, [yourAnswer])

function giveUp(){
    console.log("give up")
    setShowInitialPart(true)
    setShowNextPart(false)
    setFirst(0)
    setSecond(0)
    setThird(0)
    setFourth(0)
    setTheAnswer(0)
    setCalculation([])  
    setIsFirstSorted(false);
    setIsSecondSorted(true);
    setIsThirdSorted(true);
    setIsFourthSorted(true);
}

function reStart(){
    console.log("restart")
    setShowInitialPart(true)
    setShowNextPart(false)
    setFirst(0)
    setSecond(0)
    setThird(0)
    setFourth(0)
    setTheAnswer(0)
    setCalculation([])  
    setIsFirstSorted(false);
    setIsSecondSorted(true);
    setIsThirdSorted(true);
    setIsFourthSorted(true);
    setShowFinalPart(false)
}

    return (
      <>
<div>
        <h1 className = 'mathGame'>Math Game</h1>

<div style = {{display : showInitialPart ? 'block' : 'none'}}          className = 'getRandomNumbers'>
    <p>Pick four numbers, either small or large numbers (less than or greater than ten)</p>

    <div className = 'bigOrSmall'>
    <button className = 'numberChoice'  style = {{display : isFirstSorted ? 'none': 'block' }} onClick = {changeFirstSmall}> Small</button>
    <button className = 'numberChoice'  style = {{display : isFirstSorted ? 'none': 'block' }} onClick = {changeFirstBig}>Large</button>
    </div>

    <div className = 'bigOrSmall'>
    <button className = 'numberChoice' style = {{display : isSecondSorted ? 'none': 'block' }} onClick = {changeSecondSmall}> Small</button>
    <button className = 'numberChoice'  style = {{display : isSecondSorted ? 'none': 'block' }} onClick = {changeSecondBig}>Large</button>
    </div>

    <div className = 'bigOrSmall'>
    <button className = 'numberChoice' style = {{display : isThirdSorted ? 'none': 'block' }} onClick = {changeThirdSmall}> Small</button>
    <button className = 'numberChoice' style = {{display : isThirdSorted ? 'none': 'block' }} onClick = {changeThirdBig}>Large</button>
    </div>

    <div className = 'bigOrSmall'>
    <button className = 'numberChoice' style = {{display : isFourthSorted ? 'none': 'block' }} onClick = {changeFourthSmall}>Small</button>
    <button className = 'numberChoice' style = {{display : isFourthSorted ? 'none': 'block' }} onClick = {changeFourthBig}>Large</button>
    </div>


    <div className = 'numberHolder'> 
    <div className = 'Square'>{first}</div>
    <div className = 'Square'>{second}</div>
    <div className = 'Square'>{third}</div>
    <div className = 'Square'>{fourth}</div>
    </div>

        <div className = 'target'  style={{ display: showFigure ? 'block' : 'none' }}>Target : {theAnswer}</div>
        <div className = 'target'><button className = 'getTheTarget' style={{ display: showFigure ? 'block' : 'none' }} onClick= {getTheTarget}>Get Target</button></div>
     
</div>


<div style = {{display : showNextPart? 'block' : 'none'}}  className = 'quizContainer'>
    <div className = 'buttonRow'>
    <p> Click and use the numbers below to get to the target number. </p>
    <div className = 'theNumbers'>
   
    <button className = 'number' onClick = {firstFunction}>{first}</button>
    <button className = 'number' onClick = {secondFunction}>{second}</button>
    <button className = 'number' onClick = {thirdFunction}>{third}</button>
    <button className = 'number' onClick = {fourthFunction}>{fourth}</button>
    </div>

    <div className = 'theOperators'>
    <button className = 'operator' onClick = {pLus}>+</button>
    <button className = 'operator'  onClick = {miNus}>-</button>
    <button className = 'operator'  onClick = {mulTiply}>*</button>
    <button className = 'operator'  onClick = {diVide}>/</button>
    <button className = 'operator'  onClick = {leftBracket}>(</button>
    <button className = 'operator'  onClick = {rightBracket}>)</button>
    <button className = 'operator'  onClick = {deLete}>Del</button>
    <button className = 'operator'  disabled={isButtonDisabled}  onClick = {eQual}>=</button>
    </div>

    </div>

    <button className = 'subMit' onClick = {submit} style = {{display : showSubmit ? 'block' : 'none'}}>Submit</button>

    <div className = 'calCulation'>{calculation}</div>

    <div className = 'yourAnswer'> Your Answer : {yourAnswer}</div>

    <div className = 'theAnswer'> Target : {theAnswer}</div>

    <button onClick = {giveUp} className = 'giveUp'>Give Up and Go Again</button>

</div>

<div style ={{display : showFinalPart ? 'block' : 'none'}} className = 'finalPart'>

<h1>{calculation} is correct!</h1>
    <h1>Answer  and Target : {yourAnswer}</h1>
    <h1>Well Done!</h1>
    <button onClick = {reStart} className = 'giveUp'>Go Again</button>
</div>

</div>

      </>
    )
  }

  export default MathGame



 
