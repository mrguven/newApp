import {  useEffect, useState,useRef } from "react";
import heart from '../x.gif'

export default function CatchMe(){

const [item,setItem]=useState();
const [location,setLocation]=useState();
const [start,setStart]=useState(false);
const[con,setCon]=useState(3);
const [pause,setPause]=useState(false)
const[pic,setPic]=useState(heart);
const [score,setScore]=useState(0);

const [bestToLocal,setBestToLocal]=useState(0);
const [bestFromLocal,setBestFromLocal]=useState(0);
const [interval1,setInterval1]=useState(null);
const [interval2,setInterval2]=useState(null)
const startButton=useRef();
const displayHeart=useRef();
const scoreWiew=useRef()
const bestScoreView=useRef();
const pauseRef=useRef();



const startGame= ()=>{
    setStart(true);
    if((interval1 && interval2) === null) {
        setInterval1(setInterval(() => {
            setStart(false)
         }, 1000))
        
           
        
         setInterval2(setInterval(() => {
                setStart(true)
    
    
            }, 2000))
        }
    
}



const change =()=> {
    setPause(true);
    setStart(false);


    setScore(score+1)

 setPause(true);
 setCon(2)
}
useEffect(()=> {
    let posX= Math.floor(Math.random()*800);
    let posY= Math.floor(Math.random()*300);
    
    console.log(posX);
 
    if (start) {startButton.current.style.display= 'none';
    displayHeart.current.style.display= 'block';
    displayHeart.current.style.position= 'relative';
    if (posX>window.innerWidth) {
        posX=window.innerWidth-50;
        displayHeart.current.style.left=posX+'px';
        displayHeart.current.style.width='50px';
        displayHeart.current.style.heigth='30px';
    }else {
        displayHeart.current.style.top=posY+'px';
        displayHeart.current.style.left=posX+'px';
    }
      
};

if(con>0){
    setCon(con-1) 
 }
 else if(con==0) {
       alert('you have lost');
setCon(3);
clearInterval(interval1);
    clearInterval(interval2);
    setInterval1(null);
    setInterval2(null);
setPause(false);
setScore(0)
startButton.current.style.display= 'block';

 }


console.log(con);


if(!start) {
    displayHeart.current.style.display= 'none';
}
scoreWiew.current= 'Score: '+ score;
},[start]);


const pauseGame=()=> {
    setStart(false)

    clearInterval(interval1);
    clearInterval(interval2);
    setInterval1(null);
    setInterval2(null);
setPause(false);
startButton.current.style.display= 'block';

}




console.log(window.innerWidth);

useEffect(()=>{
    
        if(score>bestToLocal){
            setBestToLocal(score);   
        }
               if(bestToLocal>bestFromLocal){
    
            localStorage.setItem('bestScore',JSON.stringify(bestToLocal));
            
        }
   setBestFromLocal(JSON.parse(localStorage.getItem('bestScore')));
 console.log(score);
 }
,[score])


useEffect(()=>{
    
    setBestFromLocal(JSON.parse(localStorage.getItem('bestScore')));
})


bestScoreView.current= 'best score:' + bestFromLocal;




    return(

<div>
<div>
    <div className="wrapper">
    <h1 id="title">Catch Me</h1>
       
    </div>
    
    <h1 id="score"  className='scoreInfo' ref={scoreWiew} > {scoreWiew.current} <br /> </h1>
    {bestFromLocal >0  &&  <h1 className='scoreInfo'> {bestScoreView.current}</h1>}
    
</div> 


<button id="startButton" ref={startButton} onClick={startGame}>Start</button>
{ pause && 
    <button id="pauseButtonStyle"  ref={pauseRef}  onClick={pauseGame}>Pause</button>
}

    <div>
        <div id="border">
                 <img id="heartStyle" src={pic}   ref={displayHeart} onClick={change} /> 
         </div>
    </div>
</div>







    )
}