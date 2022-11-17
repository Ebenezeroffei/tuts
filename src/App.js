import React from 'react'
import { Link } from 'react-router-dom';



const App = () => {

    const apps = [
        {
            name: 'Temperature Calculator',
            path: 'temperature-calculator/'
        },
        {
            name: 'Quiz',
            path: 'quiz'
        },
        {
            name: 'Todos',
            path: 'todos'
        },
        {
            name: 'Github Users',
            path: 'github-users'
        },
        {
            name: 'Dog Breeds',
            path: 'dog-breeds'
        },
    ];

    return (
        <>
            <main className='p-5 bg-gray-100 h-screen'>
                <h1 className='text-center text-4xl text-gray-700'>Stark's React Mini Projects</h1>
                <section className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10 gap-3'>
                    {
                        apps.map(
                            app => <Link to={app.path} className='bg-white border shadow text-center rounded p-5 text-xl font-semibold text-gray-700 cursor-pointer transition-colors duration-200 hover:bg-gray-200'>
                                    {app.name}
                            </Link>
                        )
                    }
                </section>
            </main>
        </>
    );
}

export default App;