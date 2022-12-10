import React, { useState } from 'react';

const Clock_from = ({ values, handleClock, title = true,edit=false }) => {

    const [formValues, setFormValues] = useState({ ...values });

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })

    };
    const handleSubmit = (e) => {
        e.preventDefault()
        handleClock(formValues)
    };



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formValues.title}
                    onChange={handleChange}
                    disabled={!title} />
            </div>
            <div>
                <label htmlFor="timezone">Enter Ttimezone</label>
                <input
                    type="text"
                    name="timezone"
                    id="timezone"
                    value={formValues.timezone}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="offset">Enter Offset</label>
                <input
                    type="number"
                    name="offset"
                    id="offset"
                    value={formValues.offset}
                    onChange={handleChange} />
            </div>
            <button>{edit ? "Update": "Create"}</button>
        </form>
    );
};

export default Clock_from;