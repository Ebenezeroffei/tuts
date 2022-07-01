import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { UseFetch } from './misc';

const UserDetail = () => {
    const {userId} = useParams();
    const url = `https://api.github.com/users/${userId}`;
    const {loading,responseData} = UseFetch(url);

    return (
        <section className='my-4'>
            {
                loading
                ?   <h1 className='text-center text-gray-600 font-semibold text-3xl my-4'>
                        Loading...
                    </h1>
                :   <section>
                        <div className='flex md:flex-row flex-col justify-center items-center'>
                            <div className='text-center'>
                                <img className='w-52 inline-block rounded-full border-4 border-gray-500' src={responseData.data.avatar_url} alt="Avatar" />
                            </div>
                            <div className="my-6 md:ml-5">
                                <p className='text-center font-semibold text-xl'>{userId}</p>
                                <p className='text-center text-xl text-gray-600'>{responseData.data.node_id}</p>
                            </div>
                        </div>
                        <div className='text-center mt-10'>
                            <Link to='/users/' className='text-center inline-block bg-blue-500 border-2 border-blue-500 py-3 px-20 rounded hover:bg-white hover:text-blue-500 transition-all duration-150'>Go Back</Link>
                        </div>
                    </section>
            }
        </section>
    );
}

export default UserDetail;