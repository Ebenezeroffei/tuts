import React,{useContext} from 'react';
import { UserContext } from '.';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {deleteUser} = useContext(UserContext);
    const deleteUserAnimate = (ele) => {
        // ele.target.parentElement.style
        deleteUser(user.login);
    }
    const userId = user?.login;
    return (
        <div className='col'>
            <div className='flex justify-between items-center p-4 shadow border rounded hover:bg-blue-400 hover:text-white transition-all duration-150'>
                <div className='flex items-center'>
                    <img src={user.avatar_url} className='rounded-full w-16  border-4 border-gray-500 mr-2' alt="Avatar profile" />
                    <div>
                        <p className='font-semibold truncate text-gray-900 text-xl'>{user.login}</p>
                        <p className='text-md truncate text-gray-600'>{user.node_id}</p>
                    </div>
                </div>
                <div className='flex-none'>
                    <Link to={`${userId}/`} className='bg-blue-500 py-2 px-5 rounded border border-blue-500 text-white cursor-pointer hover:bg-white hover:text-blue-500 transition duration-150 mr-3'>View</Link>
                    <button onClick={deleteUserAnimate} className='bg-red-500 py-2 px-5 rounded border border-red-500 text-white cursor-pointer hover:bg-white hover:text-red-500 transition duration-150'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default User;