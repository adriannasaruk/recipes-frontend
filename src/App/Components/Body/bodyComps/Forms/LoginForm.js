import React, {useState} from "react";


const loginForm = props => {
const [box, setBox] = useState({
    email: '',
    password: '',
});

const handleChanges = event =>{
    setBox({ ...box, [event.target.name]: event.target.value});
};
const submitForm = event => {
    event.preventDefault();
    props.addNewNote(box);
    setBox({email: '', password: ''});
}


    return(     
<form onSubmit={submitForm}>
    
    <label htmlFor="email">Email: </label>
        <input id="email" 
            type="text" 
            name="email" 
            onChange={handleChanges}
            placeholder="Email"
            value={box.email}
        />

    <label htmlFor="password">Password: </label>
        <input id="password" 
            type="text" 
            name="password" 
            onChange={handleChanges}
            placeholder="password"
            value={box.password}
        />    
        <button type="submit">Login</button>
    </form>
    )
};

export default loginForm;