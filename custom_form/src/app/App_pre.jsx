import react, { useState } from "react";
import InputGroups from '../components/shared/forms/InputGroups';
import Button from '../components/UI/buttons/Button';

const init = {
    title: "",
    bio: "",
    skils: ""
};

const App = () => {
    const [values, setValues] = useState({ ...init });
    const [errors, setErrors] = useState({ ...init });
    const [focuses, setFocuses] = useState({
        title: false,
        bio: false,
        skils: false,
    })


    const handleChange = (e) => {
        setValues((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))

        const key =e.target.name
        const {errors } = checkValidity(values)
        if (!errors[key]) {
            
            setErrors((pre)=>({
                ...pre,
                [key]:errors[key]
            }))
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const { isValid, errors } = checkValidity(values)
        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors })
        }

    };
    const handleFocus = (e) => {
        setFocuses((pre)=>({
            ...pre,
            [e.target.name]:true
        }))
        
    };
    const handleBlur =(e)=>{
        const key =e.target.name
        const {errors } = checkValidity(values)
        if (errors[key] && focuses[key]) {
            setErrors((pre)=>({
                ...pre,
                [key]:errors[key]
            }))
        }else{
            setErrors((pre)=>({
                ...pre,
                [key]:"",
            }))
        }
       
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
                    <InputGroups value={values.title} label={"Title"} name={"title"} placeholder={"Software Enginer"} onChange={handleChange} error={errors.title} onFocus={handleFocus} onBlur={handleBlur} />

                    <InputGroups value={values.bio} label={"Bio"} name={"bio"} placeholder={"I am Software Enginer..."} onChange={handleChange} error={errors.bio}  onFocus={handleFocus} onBlur={handleBlur} />
                    
                    <InputGroups value={values.skils} label={"Skils"} name={"skils"} placeholder={"Javascript, React..."} onChange={handleChange} error={errors.skils} onFocus={handleFocus} onBlur={handleBlur}/>

                    <Button type="submit">Submit</Button>
                </div>
            </form>

        </div>
    );
};

export default App;