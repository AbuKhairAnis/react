import ClockList from "./components/clockList/ClockList";
import LocalClock from "./components/localClock/LocalClock";
import ClockDisplay from "./components/shared/clock_display/ClockDisplay";
import useClock from "./hooks/useClock";
import { useState } from 'react';

const LOCAL_CLOCK_INIT ={
  id: '',
  title: '',
  timezone: '',
  offset: 0,
  date: null
}


function App() {

  const [localClock, setLocalClock]= useState({...LOCAL_CLOCK_INIT})
  
 const updateLocalClock = (data)=>{
  setLocalClock({
    ...localClock,
    ...data
  })
 }

  return (
    <div>
     <LocalClock clock={localClock} updateClock ={updateLocalClock} />
      
      <ClockList />
    </div>
  );
}

export default App;
