import React, { useEffect, useState } from 'react'
import "./User.css"

const User = () => {
    const URL="https://reqres.in/api/users?page=1";
    const [input,setInput]=useState([]);
    const[loader,setLoader]=useState(false);

    useEffect(()=>{
        const getData=async ()=>{
            setLoader(true);
            const response=await fetch(URL);
            const fetching=await response.json();
          
            setInput(fetching);
           setLoader(false);
        }
        getData();
    },[]);
    
  return (
    <div className='mainContainer'>
        {loader &&  <h1>LOADING.....</h1>}
    {
        input.data?.map((value)=>(
            <div key={value.id} className='container'>
                
                <img src={value.avatar} alt="avatar" />

                <div className='name'>
                <h3>{value.first_name}</h3>
                <h3>{value.last_name}</h3>
                </div>

                <h5>{value.email}</h5>
                
            </div>
        ))
    }
    {/* {loader &&  <h1>LOADING.....</h1>} */}
    
    </div>
  )
}

export default User;