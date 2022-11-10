import React,{useEffect, useState} from 'react';
import UsersList from './UsersList';
const UserContext = React.createContext();


const Users = () => {
    const url = 'https://api.github.com/users';
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
            <header>
                <nav className='p-5 bg-gray-800'>
                    <h1 className='text-white font-serif text-3xl'>Github Users</h1>
                </nav>
            </header>
            <main>
                {
                    loading
                    ? <h1 className='text-center text-2xl py-10 font-semibold text-gray-800'>Loading....</h1>  
                    : users.length > 0
                    ? <div>
                        <h1 className='text-center text-xl p-4 font-semibold text-gray-600'>Users</h1>
                        <UsersList/>
                    </div>
                    : <h1 className='text-center p-5 text-2xl font-semibold text-gray-600'>No Users...</h1>
                }
            </main>
        </UserContext.Provider>
    );
}

export {Users,UserContext};