import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Input = ({value,type,label,name,onChangeHandler}) => {
    return (
        <div className='mb-3'>
            <label className='mb-1 inline-block'>{label} :</label>
            <input name={name} onChange={onChangeHandler} className='border-2 border-gray-300 w-full p-2 rounded text-gray-700 outline-none focus:border-blue-300' type={type} value={value} />
        </div>
    );  
}

const Login = ({user,onChangeHandler,setIsLoggedIn}) => {
    const [isError,setIsError] = useState(false);
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        const {username,password} = user;
        // Validate and login user
        if(username === 'eoffei' && password === 'testing321'){
            setIsLoggedIn(true);
            setIsError(false);
            navigate('/');

        }else{
            setIsError(true);
        }
    }
    
    const {username,password} = user;
    return (
        <>
            <h1 className='mb-5 mt-10 text-center text-4xl font-semibold text-gray-700'>Login</h1>
            <section className='flex justify-center'>
                <div className='p-5 shadow-md xl:w-1/4 lg:w-5/12 md:w-1/2 sm:w-8/12 w-10/12 rounded border'>
                    {
                        isError
                        && <p className='p-3 bg-red-100 text-sm text-gray-800 rounded mb-2'>Invalid Username and/or Password</p>
                    }
                    <Input value={username} onChangeHandler={onChangeHandler} type="text" name='username' label="Username"/>
                    <Input value={password} onChangeHandler={onChangeHandler} type="password" name='password' label="Password"/>
                    <div className='text-center mt-5'>
                        <button onClick={loginUser} className='bg-blue-600 inline-block ml-0 py-2 px-20 rounded text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-150'>Login</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;