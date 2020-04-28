import React, {useState} from "react";


const loginForm = props => {
const [box, setBox] = useState({
    Email: '',
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
    
    <label htmlFor="Email">Email: </label>
        <input id="Email" 
            type="text" 
            name="Email" 
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