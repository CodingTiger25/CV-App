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
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");

  const [showEdit, setShowEdit] = useState(false);


  const handleNameClick = () => {
    setShowEdit(false);

  }


  return (
    <> 
    
    <div >
        <h1 className='name-container'>{firstName}  {lastName}</h1>    
        <div>          
          <p className='emailF'>{email}</p>  <p className='phoneN'>{phoneNum}</p>
        </div>  
    </div>

      <div className='top-line-container'> </div>
      <div className='edit-container'>
          <button onClick={() => setShowEdit(!showEdit)}> Edit</button>
          {showEdit && (
          <div>
            <label>First Name:</label>
            <input value={firstName} type='text' onChange={e => setFirstName(e.target.value)} 
            placeholder=''></input>

            <label>Last Name:</label>
            <input value={lastName} onChange={e => setLastName(e.target.value)} 
            placeholder=''></input>

             <label>Email:</label>
            <input value={email} onChange={e => setEmail(e.target.value)} 
            placeholder=''></input>

             <label>Phone Number:</label>
            <input value={phoneNum} onChange={e => setPhoneNum(e.target.value)} 
            placeholder=''></input>


            <div className='schoolInfo'>
              <label>School Name:</label>
              <input value={schoolName} onChange={e => setSchoolName(e.target.value)} 
              placeholder=''></input>

              <div> 
                <label>Title of Study:</label>
                <input value={titleOfStudy} onChange={e => setTitleOfStudy(e.target.value)} 
                placeholder=''></input>
              </div>
             
              <div>
                <label>Date of Study:</label>
                <input value={dateOfStudy} input type="date" onChange={e => setDateOfStudy(e.target.value)} 
                placeholder=''></input>
              </div>              
            </div>

            <div className='companyInfo'>
              <label>Company Name:</label>
              <input value={"Company Name"} onChange={e => setSchoolName(e.target.value)} 
              placeholder=''></input>

            </div>

            <button onClick={() => setShowEdit(handleNameClick)}>Submit</button>
          </div>
          )}

      </div>

      <div>
        <h1 className='EdEx'>Education Experience</h1>
      </div>

      <div>
        <div className='uniInfo'>
          <li> {schoolName}</li>
          <p>{titleOfStudy}</p>
        </div>
        
        <p className='studyDate'>{dateOfStudy}</p>
      </div>

      <div className='bottom-line-container'> </div>

      <div>
        <h1 className='PrEx'>Practical Experience</h1>
      </div>
     
      
      
    </>
  )
}

export default App
