import { useEffect, useState } from 'react'
import './App.css'
import useHock from './hock/useHock';



function App() {

  const { id,
    user,
    loading,
    handleInc,
    handaleDec
  } = useHock()



  return (
    <div style={{ width: "600px" }} >
      <h1 style={{ textAlign: "center" }} >User Details</h1>
      {
        loading && <p>Loading.............</p>
      }
      {
        !loading && user && (
          <div>
            <h1>  Name: {user.name}</h1>
            <h4> Email: {user.email}</h4>
            <h3>Phone:  {user.phone}</h3>
          </div>
        )
      }
      <div style={{ display: "flex", gap: "15px" }}>
        <button disabled={id === 1} onClick={handaleDec}>Previous</button>
        <button disabled={id === 10} onClick={handleInc}>Next</button>
      </div>
    </div>
  )
}

export default App
