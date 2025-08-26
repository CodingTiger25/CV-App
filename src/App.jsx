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

  const [showEdit, setShowEdit] = useState(false);


  const handleNameClick = () => {
    setShowEdit(false);

  }


  return (
    <> 
    
    <div className='name-container'>
        <h1>{firstName}  {lastName}</h1>      
    </div>
      <div className='top-line-container'> </div>
      <div className='edit-container'>
          <button onClick={() => setShowEdit(!showEdit)}> Edit</button>
          {showEdit && (
          <div >
            <input value={firstName} onChange={e => setFirstName(e.target.value)} 
            placeholder=''></input>
            <input value={lastName} onChange={e => setLastName(e.target.value)} 
            placeholder=''></input>
            <button onClick={() => setShowEdit(handleNameClick)}>Submit</button>
          </div>
          )}
      </div>
     
      
      
    </>
  )
}

export default App
