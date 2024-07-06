import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type='text' name='name'/>
                <br/>
                <br/>
                <input onChange={handleEmailChange} type='email' name='email' required/>
                <br/>
                <br/>
                <input onChange={handlePasswordChange} type='password' name='password' required/>
                <br/>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );
};

export default StateFullForm;