import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LandPage.css'

const LandingPage = () => {

const [userData , setUserData] = useState('');

const navigate = useNavigate();

const submit = _ => {
  if(userData.length === 0) alert('Please enter user data for entering into deshboard page');
  else{
    console.log(userData);
    navigate(`/deshboard/${userData}`)
    setUserData('');
  } 
}

  return (
    <>
      <div className='landingPage'>
        <h1 style={{'paddingTop':'3rem'}}>WELCOME!!!!</h1> 
        <button style={{marginLeft:"82rem"}} onClick={()=> {navigate('/CreateStudent')}}> create student </button>
        <div className="main">

          <input placeholder='Enter Your UserName' onChange={(e)=>{setUserData(e.target.value)}} value={userData}/>

          <button onClick={()=>{ submit() }}> Go to Dashboard </button>

        </div>
      </div>
    </>
  )
}

export default LandingPage  