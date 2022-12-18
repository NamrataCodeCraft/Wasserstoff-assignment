import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Cart from './Cart';
import { useState } from 'react';

const Dashboard = () => {
    const param = useParams();
    const nevigation = useNavigate()
    const [data ,setData] = useState([]);

    const getData = async () =>{
        const {data} = await axios(`http://localhost:3003/getStudent/${param.name}`);
        localStorage.setItem('id',data.message._id);
        setData(data.message.topics)
       
    }

    useEffect(() => {
        getData()
        // console.log(data)
    }, [])
    
    return (
        <>
            <div>Dashboard</div>
            <h1> Hello  {param.name} </h1>
            <div style={{ "width": "100vw", 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center' }}>

                {data.map((items,index) =>  <Cart key={index} data = {items} /> )}
            </div>


            {/* <div style={{ "width": "220px", 'height': "100px", "backgroundColor": "red" ,"margin":'45px'}}>asdf</div> */}

            <button onClick={() => { nevigation("/addTopic") }}> Add Topic</button>
            <button onClick={() => { nevigation("/") }}> Back to Home page</button>

        </>

    )
}

export default Dashboard 