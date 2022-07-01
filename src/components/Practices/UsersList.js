import React,{useContext} from 'react'
import { UserContext } from '.';
import User from './User';


const UsersList = () => {
    const {users} = useContext(UserContext);
    return (
        <>
            <section className='p-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {
                        users.map((user,index) => <User key={index} user={user}/>)
                    }
                </div>
            </section>
        </>
    );
}

export default UsersList;