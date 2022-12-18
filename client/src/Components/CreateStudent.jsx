import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {
  const [Student, SetStudent] = useState('')
  const [summery, setSummery] = useState('')
  const [topic, setTopic] = useState('')

  const nevigation = useNavigate();

  async function submit1() {
    let data = {name: Student,topic,summery}
    const response = await axios.post('http://localhost:3003/createStudent',data);
    if(response.data.status == true) {
      nevigation('/');
      SetStudent('')
      setSummery('')
      setTopic('')
      alert('Student created .!!!!!!!!!!!!!!')
    }else alert('Some Error')
  }
  const mainDivCss = {
    "display": "flex",
    "width": "67%",
    "margin": "10rem auto",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "background": "rebeccapurple",
    "padding": "1rem",
    "borderRadius": "5px",
    "boxShadow": "#00000099 0 0 20px 6px",
  }
  return (
    <>
      <div style={mainDivCss}>
        <div>CreateStudent</div>
        <input onChange={(e) => { SetStudent(e.target.value) }} value={Student} placeholder="Student's Name" />
        <input onChange={(e) => setTopic(e.target.value)} value={topic} placeholder='Topic' />
        <textarea style={{borderRadius:"5px", "width": "534px","height": "127px"}} onChange={(e) => { setSummery(e.target.value) }} value={summery} placeholder='Summery' ></textarea>
        <button onClick={() => { submit1() }}> Create Student</button>
        <button onClick={() => { nevigation("/") }}> Back to Home page</button>

      </div>

    </>
  )
}

export default CreateStudent
