import React, { useState } from 'react'

const Usestate = () => {
  const[msg,setMsg]=useState("Welcome")
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={()=>setMsg("Thank you")}>click</button>
    </div>
  )
}

export default Usestate









// import React, { useState } from 'react'
// const Usestate = () => {
//     const[count,setCount]=useState(0)
//     const[color,setColor]=useState('blue')
//     const[bgcolor,setBgcolor]=useState('black')
//     const[name,setName]=useState(null)
//     const[phno,setPhno]=useState(null)
//     function Increment(){
//         setCount(count+1)
//     }
//   return (
//     <div>
//     <h1 style={{color:`${color}`,backgroundColor:`${bgcolor}`}}>my name is {name}</h1>
//     <h1 style={{color:`${color}`,backgroundColor:`${bgcolor}`}}>my Phno is {phno}</h1>
// <br></br>
//     <h1 style={{color:`${color}`,backgroundColor:`${bgcolor}`}}>Count:{count}</h1>


//       <button onClick={Increment}>increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//       <button onClick={()=>setColor('red')}>color</button>
//       <button onClick={()=>setBgcolor('grey')}>Bgcolor</button>
//       <input onChange={(e)=>setName(e.target.value)}></input>
//       <input onChange={(e)=>setPhno(e.target.value)}></input>
//     </div>
//   )
// }

// export default Usestate



















