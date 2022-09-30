import React from 'react'
import { useState } from 'react';
import AddField from './AddField';
import {PlusCircleFill, XLg} from 'react-bootstrap-icons'
import BusinessProcessDataTable from './BusinessProcessDataTable';
import { Container } from 'react-bootstrap';

export default function BusinessProcess() {

    //ADDING FIELD
    const [add,setAdd] = useState([]);
    const [count, setCount] = useState(0);

    const handleAdd=()=>{
        
        const ad=[...add,[]];
        setAdd(ad);
        setCount(count+1);
    }

    const handleDelete = (i) => {
        const deleteAdd = [...add];
        deleteAdd.splice(i, 1);
        console.log(i);
        setAdd(deleteAdd);
    }

    //FORM HANDLER

    const [formdata, setFormData] = useState({});
    const [view, setView] = useState(false);

    const save =(e) => {
        e.preventDefault();
        if(view == false)
            setView(true);
        else
            setView(false);
        console.log(view);
    }

    const childToParent = (some) => {
        console.log("Some: "+some);
        const deleteAdd = [...add];
        deleteAdd.splice(some, 1);
        setAdd(deleteAdd);
    }
    

  return (
    <div className='Bp'>
        <header>
            <h2>Business Process</h2>
        </header>
        
        <div className="handler">
            <button type='button' className='addBp' onClick={(e)=>handleAdd(e.preventDefault())}> <PlusCircleFill/> Add BP</button>
            {(view == false) && <button className='save' onClick={save}>Save</button>}
            {(view == true) && <button className='save' onClick={save}>back</button>}
            
        </div>
        <br />
          <br />
        <hr />

        {(view == false) && 
        <div className="main">
                {add.map((x, i)=>{
                        return (
                                <div id='childs'>
                                    {<AddField  index = {i}
                                    childToParent = {childToParent}
                                     />
                                    }{/*<button onClick={(e)=>handleDelete(i, e.preventDefault())}><span className='closeParent'><XLg/></span></button> */} 
                                    

                                </div>
                                
                                
                        );
                        
                    })}
                    
        </div>
        }

        {(view == true) && <BusinessProcessDataTable/>}

        
    </div>
  )
}
