import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Users from "./Users"; 

function OnBoardingForm({ values, errors, touched, isSubmitting, status}){
    // console.log("Obboarding form: props:"); 
    //console.log(props); 


    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status !== undefined) {
          setUsers([...users, status]);
        }
      }, [status]);

    return (
        <div>
        <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Name" />
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <label>
                  {touched.termsOfService && errors.termsOfService && <p>{errors.termsOfService}</p>}
                <Field type="checkbox" name="termsOfService" checked={values.termsOfService} />
                Terms of Service
            </label>
            <button disabled={isSubmitting}>Submit</button> 
        </Form>

        <Users users={users} />
        </div>
    )
}

const FormikOnBoardingForm = withFormik({
    mapPropsToValues({name, email, password, termsOfService}){
        return {
            name: name || "", 
            email: email || "", 
            password: password || "", 
            termsOfService: termsOfService || false, 
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("Name is required."),
        email: Yup.string()
            .email("Email is not valid.")
            .required("Email is required."),
        password: Yup.string()
            .min(10, "Password must be 10 characters or longer.") 
            .required("Password is required."), 
       termsOfService: Yup.bool("Terms of Service must be true or false.")
            .oneOf([true], "Terms of Service must be accepted.")
    }),
    //handleSubmit(values, {props, resetForm, setErrors, setSubmitting}){
    handleSubmit(values, {resetForm, setErrors, setSubmitting, setStatus}){
        console.log("I am in handleSubmit()."); 
        // console.log("props: " ); 
        // console.log(props); 
        axios.post("https://reqres.in/api/users", values)
            .then(res => {
                console.log("res:"); 
                console.log(res); 
                resetForm(); 
                setSubmitting(false); 
                setStatus(res.data); 
                // props.setUsers(users => [...users, res.data])
            })
            .catch(err => {
                console.log("err:"); 
                console.log(err); 
                setErrors(err); 
                setSubmitting(false); 
            });
    }
})(OnBoardingForm);

export default FormikOnBoardingForm; 