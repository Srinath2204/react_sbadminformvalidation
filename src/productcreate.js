import './App.css';
import { useFormik } from 'formik';

export default function ProductCreate() {

    let validate = (values) => {
        const errors = {};
        if (!values.productname) {
            errors.productname = 'Required';
        } else if (values.productname.length > 15) {
            errors.productname = 'Must be 15 characters or less';
        }

        if (!values.productdepartment) {
            errors.productdepartment = 'Required';
        } else if (values.productdepartment.length > 20) {
            errors.productdepartment = 'Must be 20 characters or less';
        }

        if (!values.price) {
            errors.price = 'Required';
        } else if (!/^[0-9\b]+$/i.test(values.price)) {
            errors.price = 'Invalid email address';
        }
        if (!values.color) {
            errors.color = 'Required';
        } else if (values.color.length > 20) {
            errors.color = 'Must be 20 characters or less';
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            productname: '',
            productdepartment: '',
            price: '',
            color: ''
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
            <h1>Create a product</h1>
            </div>
        </div>
    
        <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Product Name</label>
                        <input className="form-control" name="productname" value={formik.values.productname} onChange={formik.handleChange}></input>
                        {formik.errors.productname ? <p className="err">Enter Product Name</p> : null}
                    </div>
                    <div className="col-lg-6">
                        <label>Product Department</label>
                        <input className="form-control" name="productdepartment" value={formik.values.productdepartment} onChange={formik.handleChange}></input>
                        {formik.errors.productdepartment ? <p className="err">Enter Product department</p> : null}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Price</label>
                        <input className="form-control" name="price" value={formik.values.price} onChange={formik.handleChange}></input>
                        {formik.errors.price ? <p className="err">Enter Price</p> : null}
                    </div>
                    <div className="col-lg-6">
                        <label>Colour</label>
                        <input className="form-control" name="color" value={formik.values.colour} onChange={formik.handleChange}></input>
                        {formik.errors.color ? <p className="err">Enter Colour</p> : null}
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="submit"/>
                    </div>
                </div>
            </form>
        </div>
    </>
}