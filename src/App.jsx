import React from 'react';
import { useState, useEffect} from 'react';
import Calls from './Calls'
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {

const [callData, setData] = useState([])

// function getCalls(){
//   fetch('https://aircall-job.herokuapp.com/activities')
//   .then(response=>
//     response.json()
//     // console.log(response.json())
//     // setData(response.json())
//   )
//   // .then((data)=> console.log(data))
//   .then((data)=>setData(data))
//   .catch(error=> console.log(error))
// }

// useEffect(()=>{
//   getCalls()
// },[])
// console.log(callData)


useEffect(()=>{
  fetch('https://aircall-job.herokuapp.com/activities')
      .then( res => res.json())
      .then( data => setData(data))
      .catch(error=> console.log(error))
},[])


  return (
    
    <div className='container'>
      <Header/>
      {/* <div className="container-view">Some activities should be here</div> */}
      <Calls calls={callData}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
