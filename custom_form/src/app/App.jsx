import react from "react";
import InputGroups from '../components/shared/forms/InputGroups';
import Task from "../components/task/Task";
import Button from '../components/UI/buttons/Button';
import useForm from './../hooks/useForm';

const init = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

const validate = (values) => {
	const errors = {};

	if (!values.firstName) {
		errors.firstName = 'First Name is Required';
	}

	if (!values.lastName) {
		errors.lastName = 'Last Name is Required';
	}

	if (!values.email) {
		errors.email = 'Email is Required';
	}

	if (!values.password) {
		errors.password = 'Password is Required';
	} else if (values.password.length < 6) {
		errors.password = 'Password length must be 6 character';
	}

	return errors;
};

const App = () => {
	const {
		formState: state,
		handleBlur,
		handleChange,
		handleFocus,
		handleSubmit,
		clear,
	} = useForm({ init, validate });

	const cb = ({ hasError, values, errors }) => {
		console.log("HasError:"+ hasError, "values"+ values , "errors"+ errors) ;
		if (hasError) {
			alert('[ERROR]' + JSON.stringify(errors));
			console.log(errors);
		} else {
			alert('[SUCCESS]' + JSON.stringify(values));
		}
	};

    return (
        <div className='root'>
            <form onSubmit={(e) => handleSubmit(e, cb)}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <InputGroups value={state.firstName.value}
						label={'First Name:'}
						name={'firstName'}
						placeholder={'John'}
						type={'text'}
						error={state.firstName.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur} />

                    <InputGroups value={state.lastName.value}
						label={'Last Name:'}
						name={'lastName'}
						type={'text'}
						placeholder={'Doe'}
						error={state.lastName.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur} />

                    <InputGroups value={state.email.value}
						label={'Email:'}
						name={'email'}
						type={'email'}
						placeholder={'john@test.com'}
						error={state.email.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur} />

                    <InputGroups value={state.password.value}
						label={'password:'}
						name={'password'}
						type={'password'}
						placeholder={'*****'}
						error={state.password.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur} />

                   <div>
                   <div>
						<Button style={{margin:"0 .5rem"}} type="reset" onClick={clear}>Clear</Button>
						<Button type="submit">Submit</Button>
					</div>
                   </div>
                </div>
            </form>
			<hr />
			<Task></Task>
        </div>
    );
};

export default App;