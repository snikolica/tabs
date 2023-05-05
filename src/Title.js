import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Button from './Button';


function Title({jobs, value, setValue}) {

    const {company,dates, duties,title} = jobs[value];
  return (
    <section className='section'>
    <div className="title">
      <h2>Expirience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
<div className="btn-container">
 <Button  value={value} setValue={setValue} jobs={jobs}  />

</div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty,index)=> {
return <div key={index} className='job-desc'>
<FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
<p>{duty}</p>
</div>
        })}
      </article>
    </div>


  </section>
  )
}

export default Title
