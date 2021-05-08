import './App.css';
import { useFormik } from 'formik';

export default function UserCreate() {

    let validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.location) {
            errors.location = 'Required';
        } else if (values.location.length > 20) {
            errors.location = 'Must be 20 characters or less';
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            location: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>User Form</h1>
                </div>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" name="firstName" value={formik.values.firstName} onChange={formik.handleChange}></input>
                        {formik.errors.firstName ? <p className="err">Enter First Name</p> : null}
                    </div>
                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" name="lastName" value={formik.values.lastName} onChange={formik.handleChange}></input>
                        {formik.errors.lastName ? <p className="err">Enter Last Name</p> : null}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>E-mail</label>
                        <input className="form-control" name="email" value={formik.values.email} onChange={formik.handleChange}></input>
                        {formik.errors.email ? <p className="err">Enter email</p> : null}
                    </div>
                    <div className="col-lg-6">
                        <label>Location</label>
                        <input className="form-control" name="location" value={formik.values.location} onChange={formik.handleChange}></input>
                        {formik.errors.location ? <p className="err">Enter Location</p> : null}
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="submit" />
                    </div>
                </div>
            </form>
        </div>
    </>
}