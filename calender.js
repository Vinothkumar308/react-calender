import React from 'react'
import {useState} from 'react'
import './calender.css'
export const Calender = () => {

  const days = ["Sun","Mon","Tue","wed","Thu","Fri","Sat"]
  const months = ["January","Febraury","march","April","May","June","July","August","Septemper","October","November","december",]

  const [dated,setDated] = useState(new Date())

  
  const daysInMonth = ()=>{
    const daysBox = []

    const firstDay = new Date(dated.getFullYear(),dated.getMonth(),1)
    const lastDay = new Date(dated.getFullYear(),dated.getMonth()+1,0)

    for(let i=1;i<=firstDay.getDay();i++){
        daysBox.push(null)
    }
    for(let i=1;i<=lastDay.getDate();i++){
        daysBox.push(new Date(dated.getFullYear(),dated.getMonth(),i))
    }
    
    return daysBox
  }

  function SameDay(d1,d2){
    return d1.getDate() === d2.getDate()&& d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()   
  }
 
 
  const HandleChange = (e)=>{
    const value = e.target.value
    setDated(new Date(dated.getFullYear(),value,1))
  }

  const HandleChanged = (e)=>{
    const value = e.target.value
    setDated(new Date(value,dated.getMonth(),1)) 
  }

  return (
    <div className='container'>
       <div className="header">
           <button onClick={()=>setDated(new Date(dated.getFullYear(),dated.getMonth()-1,1))}></button>
           <select value={dated.getMonth()} onChange={HandleChange}>
               {months.map((month,index)=>(
                  <option value={index} key={index}>
                    {month}
                  </option>
               ))}
           </select>
           <select value={dated.getFullYear()} onChange={HandleChanged}>
              {Array.from({length:10},(_,i)=>(dated.getFullYear()-5 + i)).map((i)=>(<option key={i} value={i}>{i}</option>))}
           </select>
           <button onClick={()=>setDated(new Date(dated.getFullYear(),dated.getMonth()+1,1))}></button>
        </div> 
        <div className='seven'>{days.map((day,index)=>(<div key={index}>{day}</div> ))}</div> 
        <div className='number'>{
          daysInMonth().map((num,index)=>(<div 
          key={index} 
          className={num?(SameDay(num,new Date())?"dd li":"dd"):"empty"}>
          {num?num.getDate():""}
          </div>))}</div>  
    </div>
  )
}
