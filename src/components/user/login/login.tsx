import UserForm from '../userForm';

const Login = () => {
    return (
        <div>
     <h1 style={{marginLeft: "40%"}}>Welcome to reactive!</h1>
     <UserForm 
        username=''
        password=''
        submitText='Login'
    />
   </div>
    )
}

export default Login;