import React from 'react'
import TodoItem from './TodoItem';

const Todo = ({toggleCheck,todoItems,deleteItem,editItem}) => {
    return (
        <section className='border rounded shadow'>

            <h4 className='text-center py-2 text-lg font-semibold bg-gray-500 text-white'>
                ToDo Items
            </h4>
            {todoItems.length > 0 
                ?<ul>
                    {todoItems.map(todo => <TodoItem toggleCheck={toggleCheck} deleteItem={deleteItem} editItem={editItem} key={todo.id} item={todo}/>)}
                </ul>
                : <h1 className='text-center text-2xl font-semibold capitalize p-4 text-gray-600'>You havent added any items</h1>
            }
        </section>
    );
}

export default Todo;