import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Index() {

  const [data, setData] = useState("");

  function handleSubmit(){

      axios.post('http://localhost:5000/demoSubmit', data, {headers: {'Content-Type': 'application/json'}})
      .then(res => console.log(res.data));
  }



  return (
    <div>
      <Link to="/AddBusinessProcess">
        <button>Add Business Process</button> 
      </Link>
      
          
    </div>
  )
}