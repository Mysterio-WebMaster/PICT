import React from 'react'
import { useState } from 'react';
import AddField from './AddField';

export default function BusinessProcess() {

    //ADDING FIELD
    const [add,setAdd] = useState([]);
    const [count, setCount] = useState(0);

    const handleAdd=()=>{
        
        const ad=[...add,[]];
        setAdd(ad);
        setCount(count+1);
    }

    

  return (
    <div className='Bp'>
        <header>
            <h2>Business Process</h2>
        </header>
        
        
        <div className="handler">
            <button className='addBp' onClick={(e)=>handleAdd(e.preventDefault())}>Add BP</button>
            <button className='save'>Save</button>
        </div>  
        <br /><br />

        <div className="main">
                    {add.map(()=>{
                        return (
                                <div id='childs' >
                                    {<AddField/>}
                                </div>
                        );
                    })}
        
        </div>
        

    </div>
  )
}
