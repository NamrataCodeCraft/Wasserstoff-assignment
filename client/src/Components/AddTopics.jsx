import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTopics = () => {
    const [topic, setTopic] = useState('')
    const [summery, setSummery] = useState('')

    const nevigation = useNavigate();

    async function submit() {
        const respons = await axios.put(`http://localhost:3003/addTopic/${localStorage.getItem('id')}`, { topic, summery })

        if (respons.data.status === true) {
            nevigation('/')
            setSummery('')
            setTopic('')
            alert('Added topic');
        } else {
            alert('Some error')
        }
    }
    return (
        <>
            <div style={{ height:"100vh",display:'flex',justifyContent:'center',alignItems:'center', width: '100vw',  }}>
                <div style={{ margin:'0 auto',width:"60%",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',background:'red',padding:'20px'}}>
  
                    <input style={{ width: "60%", border: '1px solid black', margin: '0 auto' }} onChange={(e) => {
                        setTopic(e.target.value)
                    }} value={topic} placeholder='Enter your topic' />
                    <textarea style={{ width: "477px", height: '137px', margin: "1rem" }} onChange={(e) => {
                        setSummery(e.target.value)
                    }} value={summery} placeholder='Enter your summery'>
                    </textarea>
                    <button onClick={() => { submit() }}> send</button>
                    <button onClick={() => { nevigation("/") }}> Back to Home page</button>
                    <details placeholder='View Ex'>
                        sldkf[fow] [sdfkmpisfjwer] { } (ksapdfoijdsf) sdfijiseopfies
                    </details>
                </div>
            </div>
        </>
    )
}

export default AddTopics