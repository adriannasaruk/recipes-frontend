import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom'
import "./singup.css"


const formSchema = yup.object().shape({
    name: yup.string().required("What's your name?").min(4,'Name must be at least 4 characters'),
    email: yup.string().required("The email address you supplied is invalid."),
    password: yup.string().required("Enter a password to continue.").min(6,'Your password is too short.'),
    terms:yup.boolean().oneOf([true], "Please agree to the terms of use"),
});

const Signup = props => {
    const [disable, setDisable] = useState(false);  
        const [information, setInformation] = useState({
            name: '',
            password: '',
            email: '',
            terms: '',
        });
    const[error, setError] = useState({
            name: '',
            password: '',
            email: '',
            terms: '',
        });

    const [post, setPost] = useState([])

    useEffect(() => {
            formSchema.isValid(information)
            .then(pressed => {
                setDisable(!pressed);
            })
            },[information])    
    
    const validateChange = event => {
        yup.reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(pressed => {
            setError({
                ...error,[event.target.name] : ''
            });
        })
        .catch(err => {
            setError({
                ...error, [event.target.name] : err.errors[0]
            });
        })
    };   
    const inputChange = event =>{
        event.persist();
            const newFormData = {
                ...information, [event.target.name] : 
                event.target.type === "checkbox" ? event.target.checked : event.target.value
            };
        setInformation(newFormData);
     validateChange(event);
    };
    const submitForm = event => {
            event.preventDefault();
            axios
                  .post("https://reqres.in/api/users", information)
                  .then(res => {
                    setPost(res.data); 
                    console.log("success", post);
                
                    setInformation({
                      name: '',
                      password: '',
                      email: '',
                      terms: '',
                    });
                  })
                  .catch(err => console.log(err.response));
    }
    
        return( 
    <div className="signupForm">           
    <form onSubmit={submitForm}>
    
    <Link to={`/`} ></Link>
    
        <label htmlFor="name">{error.name.length > 0 ? <p className="error">{error.name}</p> : null} </label>
            <input 
                id="name" 
                type="text" 
                name="name" 
                onChange={inputChange}
                placeholder="Name"
                value={information.name} required/>
            
        <label htmlFor="password">{error.password.length > 0 ? (<p className="error">{error.password}</p>) : null} </label> 
            <input
                id="password" 
                type="text" 
                name="password" 
                onChange={inputChange}
                placeholder="Password"
                value={information.password} required/>
    
        <label htmlFor="email">{error.email.length > 0 ? (<p className="error">{error.email}</p>) : null}</label>    
            <input id="email" 
                type="text" 
                name="email" 
                onChange={inputChange}
                placeholder="Email"
                value={information.email} required/>

        <label htmlFor="terms"></label>   
        <input
                type = "checkbox"
                name="terms"
                onChange={inputChange}
                checked={information.terms} />
                By clicking on Sign up, you agree to the Terms and Conditions of Use. 

        <button disabled={disable} type="submit">Sign Up</button>
    
    </form>  
    </div>
    );}
    
export default Signup;