import React, { useState } from 'react';
import Clock_from from '../clock_form/Clock_from';


const defultOffset = [
    -11.50,
    -11,
    -10.50,
    -10,
    -9.50,
    -9,
    -8.50,
    -8,
    0, 1, 2, 3, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5,
]


const ClockActions = ({ local = false, clock, updateClock }) => {
    const [isEdit, setIsEdit] = useState(false);




    return (
        <div>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            {
                local ? <button> create</button> : <button>delete</button>
            }
            {
                isEdit && (
                    <Clock_from
                        values={clock}
                        handleClock={updateClock}
                        title={!local}
                        edit={true}
                    ></Clock_from>
                )}
        </div>
    );
};

export default ClockActions;