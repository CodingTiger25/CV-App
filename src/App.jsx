import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");


  return (
    <>
      <div className='top-line-container'>
        
      <h1>{firstName}  {lastName}</h1>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder=''></input>
      <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder=''></input>
            

      </div>  
      <h1>Resume</h1>
      
    </>
  )
}

export default App
