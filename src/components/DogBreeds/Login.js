import React, { useContext,useState } from 'react';
import { handleLoginValueInput } from './control';
import { AppContext } from '.';
import { useNavigate } from 'react-router-dom';


const TextInput = ({labelText, value,name,obscureText,handleLoginValueInput}) => {
    return (
        <div>
            <section className='mb-5'>
                    <label htmlFor="name" className='text-sm font-semibold'>{labelText}:</label>
                    <input onChange={handleLoginValueInput} name={name} type= {obscureText ? "password": "text" } className='border border-gray-400 rounded-sm w-full outline-none p-2 shadow focus:border-blue-400' value={value} />
                </section>
        </div>
    )
}

const Login = () => {
    const {setUserDetails,userDetails} = useContext(AppContext);
    const {username,password} =  userDetails;
    const navigate = useNavigate();
    const [errorDetected, setErrorDetected] = useState(false);

    const signIn = () => {
        if(username === 'eoffei' && password === 'testing321'){
            localStorage.setItem('isLoggedIn',true);
            setUserDetails({
                username: '',
                password: '',
            })
            navigate('/');
        }
        else{
            setErrorDetected(true);
        }
    }

    return (
        <>
            <main className='max-w-sm p-4 my-32 mx-auto'>
                <p className='text-center text-4xl text-gray-800 mb-8'>Sign In</p>
                {errorDetected && <p className='bg-red-100 border font-semibold text-sm text-gray-800 border-red-400 p-3 rounded'>
                    Input the username and the password
                </p>}
                <TextInput labelText={"Username"} handleLoginValueInput={(e) => handleLoginValueInput(e,setUserDetails)} obscureText={false} name='username' value={username}/>
                <TextInput labelText={"Password"} handleLoginValueInput={(e) => handleLoginValueInput(e,setUserDetails)} obscureText={true} name='password' value={password}/>
                <button onClick={() => signIn(username,password)} className='w-full bg-green-400 py-2 rounded-sm font-semibold text-sm shadow transition-all duration-200 hover:bg-black hover:text-green-400'>Submit</button>
            </main>
        </>
    );
}

export default Login;