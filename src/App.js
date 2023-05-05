import React, {useState, useEffect} from 'react'
import Title from './Title';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading,setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
const response = await fetch(url);
const newJobs = await response.json();

setJobs(newJobs);
// console.log(jobs);
setLoading(false)
  };

  useEffect(()=> {
     fetchJobs();
  },[]);

if (loading) {
  return (
    <section className='section loading'>
      <h1>Loading...</h1>
    </section>
  )
}
  return (
<Title jobs={jobs} value={value} setValue={setValue}/>
  );
}

export default App;
