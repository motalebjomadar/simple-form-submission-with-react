
const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name'/>
                <br/>
                <br/>
                <input type='email' name='email' required/>
                <br/>
                <br/>
                <input type='password' name='password' required/>
                <br/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    );
};

export default SimpleForm;