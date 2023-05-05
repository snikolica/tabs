import React from 'react';
import {v4 as uuidv4} from 'uuid';


function Button({value, setValue, jobs}) {

  return (
  <>
    {jobs.map((job,index)=> {
    const id = uuidv4();
       return <button key={id} className={`btn ${index === value && 'active-btn'}`} onClick={()=> setValue(index)}>
    {job.company}
    </button>
})}

</>
  )
}

export default Button
