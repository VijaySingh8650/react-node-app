import React, { useEffect } from 'react'

const App = () => {

  useEffect(()=>{
    fetch("https://react-node-app-f3ho.onrender.com/api").then((res)=>res.json()).then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[]);

  return (
    <div>
      hello
    </div>
  )
}

export default App
