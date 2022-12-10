import React from 'react';
import InputGroups from '../components/shared/forms/InputGroups';


const App = () => {
    return (
        <div className='root'>
            <h1>App is Running now</h1>
            <InputGroups name={'title'} placeholder={"Enter Your Name"} label ={"Title"} error={"Something was Wrong"}></InputGroups>
        </div>
    );
};

export default App;