import React from 'react'
import { useState } from 'react'
import './style.css'
import BusinessProcess from './BusinessProcess';

export default function Index() {
    const [view, setView] = useState(true);

    function handleView(){
        setView(false);
    }

  return (
    <div>
        {view == true && (
            <button className='addBP' onClick={handleView}>Add Business Process</button>
        )}

        {   
            view != true && <BusinessProcess/>
        }
        
    </div>
  )
}
