import React from 'react'
import { useState } from 'react'

export default function AddField() {

    let [childInput, setChildInput] = useState([]);

    // ADD SUB BP

    const handleAddChild = () =>{
        let cInput = [...childInput, []];
        setChildInput(cInput);
    }

    //DELETE SUB BP

    const handleDeleteChild = (i) =>{
        let cInput = [...childInput];
        cInput.splice(i, 1)
        setChildInput(cInput);
    }

    //ON INPUT

    const handleInputChange = (e, i) => {
        const inputData = [...childInput];
        inputData[i] = e.target.value;
        setChildInput(inputData);
        
    }
    

  return (
    <div>
        <div className="childHandler">
            <input 
                type="text"
                placeholder='Parent'
                name='parent'
            />

            <button>
                X
            </button>

        </div>

        {childInput.map((child, i)=>{
            return(
                <div className="children" key={i}>


                    <input 
                        type="text"
                        placeholder="child"
                        name='child'
                        value={child}
                        onChange = {e => handleInputChange(e, i)}
                    />

                    <button
                        onClick={(e)=> handleDeleteChild(i, e.preventDefault())}
                    >
                        X
                    </button>
                </div>
            )
        })}

        

        <br />

        <button
            onClick={handleAddChild}
        >
            Add sub BP
        </button>

        

    </div>
  )
}
