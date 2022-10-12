import React from 'react'
import { useState } from 'react';
import AddField from './AddField';
import {PlusCircleFill, XLg} from 'react-bootstrap-icons'
//import BusinessProcessDataTable from './BusinessProcessDataTable';
import { Container } from 'react-bootstrap';
import { Await, Link } from 'react-router-dom';
import axios, { AxiosHeaders } from 'axios';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export default function BusinessProcess() {
    let navigate = useNavigate();

    //ADDING FIELD
    const [add,setAdd] = useState([]);
    let [count, setCount] = useState(0);

    const handleAdd=()=>{
        const ad=[...add,[]];
        setAdd(ad);

        
            setFormData({
                parent: parent,
                child: input
            })
    
           let fdata = [...data, formdata];
           setData(fdata)
        
        
        
       //console.log(data);
        //new childFormHandle();
    }

    

    //FORM HANDLER

    const [formdata, setFormData] = useState(
        {
            parent:"",
            child: ""
        }
    );

    const [data, setData] = useState([]);
    const [input, setInput] = useState([]);
    const [parent, setParent] = useState([]);
    const [view, setView] = useState(false);

    const childInput = (count) => {
       // console.log("Count: "+count);
    }

    const childFormHandle = (someChildern, someParent) =>{
        //console.log(someParent);
        setInput(someChildern);
        setParent(someParent);
        //console.log(" triggered");
    }

    const handleparentData = (pData, i) => {
        const parentInputData = [...add];
        parentInputData[i] = pData;
        setAdd(parentInputData);
    }
    

    const childToParent = (anyIndex) => {
        const deleteAdd = [...add];
        deleteAdd.splice(anyIndex, 1);
       //console.log(deleteAdd);
       setAdd(deleteAdd);
    }

    //DATA VIEWER
    let save = () => {
        setFormData({
            parent: parent,
            child: input
        })

       let fdata = [...data, formdata];
       setData(fdata)
       //console.log(data);
        /*
       axios.post('http://localhost:5000/Submit', data)
       .then( (res) =>  console.log(res.data) );
       
       */
        
    }


    const postData = () => {

        // let temp = [...data]
        // temp.splice(0,2)
        // setData(temp);
         

      //setData([]);
      
    }

    useEffect(() => {
        //console.log(formdata);
        
        console.log(data);

      }); 


  return (
    <div className='Bp'>
        <form  onSubmit={e => save(e.preventDefault())}>
        <header>
            <h2>Business Process</h2>
        </header>
        
        <div className="handler">
            <button type='button' className='addBp' onClick={(e)=>handleAdd(e.preventDefault())}> <PlusCircleFill/> Add BP</button>
            <button type='submit' className='save'>Save</button>
            <Link to="/Table">
            Show
            </Link>

        </div>
        <br />
          <br />
        <hr />

        {(view == false) && 
        <div className="main">
                {add.map((data, i)=>{
                        return (
                                <div id='childs' key={i}>
                                    {<AddField  
                                        index = {i}

                                        childToParent = {childToParent}

                                        childFormHandle = {childFormHandle}

                                        childInput = {childInput}

                                        data = {data}

                                        handleparentData = {handleparentData}
                                    
                                     />
                                    }
                                    {/*<button onClick={(e)=>handleDelete(i, e.preventDefault())}><span className='closeParent'><XLg/></span></button> */ }
                                    

                                </div>
            
                                
                        );
                        
                    })}
                    
        </div>
        }

        </form>
    </div>
  )
}
