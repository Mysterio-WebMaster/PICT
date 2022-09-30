import React from 'react'
import { useState, useEffect } from 'react';
import {XLg, PlusCircleFill} from 'react-bootstrap-icons'


export default function AddField(props) {
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

    const handlePDelete = () => {
        
       props.childToParent(props.index);
    }

    //PARENT AND CHILD HANDLER

    const [parent, setParent] = useState("");
    const [child, setChild] = useState([]);

    /*useEffect(() => {
        let children = [,child]
        onChange({
            
          parent, child
        });
        console.log(child);
      }, [parent, child, onChange]); */

  return (
    <div>
        

        <div className='childHandler'>
            <span style={{color:"white"}}>{props.index + 1}.</span>
            <input type="text" placeholder="Add a New Primary BP" name="parent" id='primaryParent' onChange={(e) => setParent(e.target.value)} autoFocus/>
            

            <button onClick={(e)=>handlePDelete( e.preventDefault())}><span className='closeParent'><XLg/></span></button>

            
        </div>

         {val.map((data,i)=>{
            return(
                <div className="AddField2">
                    
                    <input value={data} placeholder="Add a New Value" onChange={e=>handleChange(e,i, e.preventDefault(), setChild([[...child], e.target.value]))} name={"child"+i}/>    
                    {/* <button><i class="icon-check-sign"/></button> */}
                    
                    <button onClick={(e)=>handleDelete(i, e.preventDefault())}><span className='close'><XLg/></span></button>
                </div>
                
            );
         })}

         <button onClick={(e)=>handleAdd(e.preventDefault())} className='addsubBP'> 

         <span><PlusCircleFill/></span> Add sub BP</button>
    </div>
    
  )
}

