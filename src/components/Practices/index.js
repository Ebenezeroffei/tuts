import React,{useEffect, useState} from 'react';
import UsersList from './UsersList';
import { UseFetch } from './misc';

const UserContext = React.createContext();


const Users = () => {
    const url = 'https://api.github.com/users';
    const res = UseFetch(url);
    const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(url)
            .then(res => res.json())
            .then(data=>{
                setUsers(data);
                setLoading(false);
            });
            setLoading(false);
        }
        fetchData();
    },[])


    const deleteUser = (username) => {
        setUsers((prevUserList) => {
            const modifiedUserList = prevUserList.filter(user => user.login !== username);
            return modifiedUserList;
        });
    }

    return (
        <UserContext.Provider value={{users,deleteUser}}>
            <main>
                {
                    loading
                    ? <h1 className='text-center text-3xl p-4 font-semibold text-gray-800'>Loading....</h1>  
                    : users.length > 0
                    ? <div>
                        <h1 className='text-center text-3xl p-4 font-semibold text-gray-800'>Users</h1>
                        <UsersList/>
                    </div>
                    : <h1 className='text-center p-5 text-2xl font-semibold text-gray-600'>No Users...</h1>
                }
            </main>
        </UserContext.Provider>
    );
}

export {Users,UserContext};