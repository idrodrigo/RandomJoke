import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [joke, setjoke] = useState([]);
  

  // const next = () => {
  //   const URL = "https://joke.deno.dev/all";

  //   const request=fetch(URL);
  //   request.then(data => data.json())
  //          .then(data => data
  //          .map( jo => setjoke(e => [e, <div className='joke' key={jo.id}> {jo.id} - {jo.setup} 
  //                                       <div>{jo.punchline}</div> </div>])))
  //          .catch(() => console.log("error"))
  // }
  const next = () => {
    const URL = "https://api.chucknorris.io/jokes/random";
    const request=fetch(URL);
    request.then(data => data.json())
           .then(data => setjoke(data.value))
           .catch(() => console.log("error"))
  }

  useEffect( () => {
    next()
    
  }, [])
  return (
    <>
       <div className='joke'>{joke} </div> 
        
      <button onClick={next}>Next</button>
    </>
  )
}

export default App
