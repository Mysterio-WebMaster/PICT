import React, { useState } from 'react'
import { useEffect } from 'react';
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function BusinessProcessDataTable() {

    let [fetchedData, setFetchedData] = useState([])

    let [desc, setDesc] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/demoFetch')
        .then(response => {setFetchedData(response.data);
        
        });
      },[]);



      const something = () => {
        return(
            <p>{}</p>

        )
          
      }

  return (
    <div>
          <div className="handler">
            <Link to="/">
            BACK
            </Link>

          </div>

        <Container> 
          {fetchedData.parent} <br /> 
          {fetchedData.child0}

          {something}
          
          
          
          
          
        </Container>
        <h3>Table</h3> 
    </div>
  )
}
