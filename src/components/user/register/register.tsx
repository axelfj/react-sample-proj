import UserForm from '../userForm';

const Login = () => {
    return (
        <div>
     <h1 style={{marginLeft: "40%"}}>Welcome to reactive!</h1>
     <UserForm 
        username=''
        lastName=''
        firstName=''
        password=''
        submitText='Register'
    />
   </div>
    )
}

export default Login;