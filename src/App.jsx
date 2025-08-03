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
        

            

      </div>  
      <h1>Resume</h1>
      
    </>
  )
}

export default App
