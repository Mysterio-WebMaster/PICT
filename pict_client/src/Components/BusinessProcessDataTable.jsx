import React, { useState } from 'react'
import { useEffect } from 'react';
import {Container} from 'react-bootstrap'

export default function BusinessProcessDataTable() {

    let [fetchedData, setFetchedData] = useState([])

    let [desc, setDesc] = useState([]);

    useEffect(() => {
         fetch("http://localhost:5000/")
        .then(res => res.json())
        .then(data => setFetchedData(data));

        fetch("http://localhost:5000/desc")
        .then(res => res.json())
        .then(data => setDesc(data));

      }, []);
      
      

  return (
    <div>
        <Container>
        <table className="table table-bordered">
        <thead>
        <tr className='table-dark'>
        {desc.map((item, i)=>(
                <th>{item.Field}</th>
        ) )}
        </tr>
        </thead>
        <tbody>
        {fetchedData.map((item, i)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.Currency}</td>
                <td>{item.Channel}</td>
                <td>{item.Account}</td>
                <td>{item.Approval}</td>
            </tr>
        ) )}
            
        </tbody>
        </table>

        </Container>

        
        
    </div>
  )
}
