import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'








function App() {
   const [time,setTime]= useState(0);
   const [value,setValue]= useState('PAUSE');
   const timeref=useRef();
   const resumeref=useRef(0);
   const Start=()=>{
       timeref.current=setInterval(()=>{
           setTime(time=>time+1);
       },1000)
   }
   const Stop=()=>{
       clearInterval(timeref.current);
   }
   const Reset=()=>{
      setTime(0);
      clearInterval(timeref.current);
   }
   const Pause=()=>{
     if(resumeref.current===2){
        return
     }
       if(timeref.current){
          clearInterval(timeref.current);
          timeref.current=null;
          setValue('RESUME');
       }
       else{
         resumeref.current++;
          Start();
          setValue('PAUSE');
       }
   }
   
    
   
  
  return (
    <>
     <h1 className='font-bold text-3xl relative top-[100px]'>{time}</h1>
      <div className='flex justify-around relative top-[200px]'>
       <button className='h-[40px] w-[80px] bg-green-600 rounded-lg' onClick={Start}>START</button>
       <button className='h-[40px] w-[80px] bg-red-600 rounded-lg' onClick={Stop} >STOP</button>
       <button className='h-[40px] w-[80px] bg-orange-600 rounded-lg' onClick={Reset} >RESET</button>
       <button className='h-[40px] w-[80px] bg-violet-600 rounded-lg' onClick={Pause}>{value}</button>
      </div>
    
    </>
  )
}

export default App
