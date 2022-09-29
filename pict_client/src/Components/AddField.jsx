import React from 'react'
import { useState } from 'react';

export default function AddField() {
    const [val,setVal] = useState([]);

    const handleAdd = () =>{
        const abc = [...val,[]];
        setVal(abc);
    }

    const handleChange = (onChangeValue,i)=>{
        const inputData = [...val];
        inputData[i] = onChangeValue.target.value;
        setVal(inputData);
    }
    const handleDelete = (i) => {
        const deleteVal = [...val];
        deleteVal.splice(i,1);
        setVal(deleteVal);
    }

  return (
    <div>
        <input type="text" placeholder="Add a New Primary BP" name="parent" id='primaryParent' autoFocus/>
        <br />
        <button onClick={(e)=>handleAdd(e.preventDefault())}>Add sub BPx</button>

         {val.map((data,i)=>{
            return(
                <div className="AddField2">
                 
                    <input value={data} placeholder="Add a New Value" onChange={e=>handleChange(e,i, e.preventDefault())} name={"child"+i}/>
                    {/* <button><i class="icon-check-sign"/></button> */}
                    
                    <button onClick={(e)=>handleDelete(i, e.preventDefault())}>X</button>
                </div>
            );
         })}
         
    </div>
  )
}
