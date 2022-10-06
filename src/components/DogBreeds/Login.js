import React, { useContext } from 'react';
import { AppContext } from '.';


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
    const {handleLoginValueInput,setUserDetails,userDetails,signIn} = useContext(AppContext);
    const {username,password} =  userDetails;

    return (
        <>
            <main className='max-w-sm p-4 my-32 mx-auto'>
                <p className='text-center text-4xl text-gray-800 mb-8'>Sign In</p>
                <TextInput labelText={"Username"} handleLoginValueInput={(e) => handleLoginValueInput(e,setUserDetails)} obscureText={false} name='username' value={username}/>
                <TextInput labelText={"Password"} handleLoginValueInput={(e) => handleLoginValueInput(e,setUserDetails)} obscureText={true} name='password' value={password}/>
                <button onClick={() => signIn(username,password)} className='w-full bg-green-400 py-2 rounded-sm font-semibold text-sm border border-green-400 shadow transition-all duration-200 hover:bg-green-500 hover:text-white'>Submit</button>
            </main>
        </>
    );
}

export default Login;