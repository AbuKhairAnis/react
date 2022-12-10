import react, { useState } from "react";
import InputGroups from '../components/shared/forms/InputGroups';
import Button from '../components/UI/buttons/Button';
import { deepClone } from "../utils/Object_utils";

const init = {
    title: {
        value: '',
        error: '',
        focus: false
    },
    bio: {
        value: '',
        error: '',
        focus: false
    },
    skils: {
        value: '',
        error: '',
        focus: false
    },
};

const App = () => {

    const [state, setState] = useState({ ...init })
    const [hasErrors, SetHasErrors] = useState(false)

    const mapStateToValues = (state) => {
        return Object.keys(state).reduce((acc, cur) => {
            acc[cur] = state[cur].value
            return acc
        }, {})
    }

    const handleChange = (e) => {

        const { name: key, value } = e.target
        const oldState = deepClone(state)
        oldState[key].value = value
        const values = mapStateToValues(oldState)

        const { errors } = checkValidity(values)
        if (oldState[key].focus && errors[key]) {
            oldState[key].error = errors[key];
        
        } else {
            oldState[key].error = ''
        }
        setState(oldState)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const values = mapStateToValues(state)
        const { isValid, errors } = checkValidity(values)

        if (isValid) {
            console.log(state);
        } else {
            const oldState = deepClone(state);
            Object.keys(errors).forEach(key=>{
                oldState[key].error=errors[key]
            })
            
            setState(oldState)
        }


    };
    const handleFocus = (e) => {
        const { name } = e.target
        const oldState = deepClone(state)
        oldState[name].focus = true
        setState(oldState)


    };
    const handleBlur = (e) => {
        const key = e.target.name
        const values = mapStateToValues(state)
        const { errors } = checkValidity(values)
        const oldState = deepClone(state)

        if (oldState[key].focus && errors[key]) {
            oldState[key].error = errors[key]
        } else {
            oldState[key].error = ''
        }
        setState(oldState)
    }

    const checkValidity = (values) => {
        const errors = {};
        const { title, bio, skils } = values;
        if (!title) {
            errors.title = "Invalid title"
        }
        if (!bio) {
            errors.bio = "Invalid bio"
        }
        if (!skils) {
            errors.skils = "Invalid Skils"
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0

        }
    };

    return (
        <div className='root'>
            <form onSubmit={handleSubmit} >
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <InputGroups value={state.title.value} label={"Title"} name={"title"} placeholder={"Software Enginer"} onChange={handleChange} error={state.title.error} onFocus={handleFocus} onBlur={handleBlur} />

                    <InputGroups value={state.bio.value} label={"Bio"} name={"bio"} placeholder={"I am Software Enginer..."} onChange={handleChange} error={state.bio.error} onFocus={handleFocus} onBlur={handleBlur} />

                    <InputGroups value={state.skils.value} label={"Skils"} name={"skils"} placeholder={"Javascript, React..."} onChange={handleChange} error={state.skils.error} onFocus={handleFocus} onBlur={handleBlur} />

                    <Button disabled={hasErrors} type="submit">Submit</Button>
                </div>
            </form>

        </div>
    );
};

export default App;