import React from 'react'

const TodoItem = ({item,toggleCheck,deleteItem,editItem}) => {
    return (
        <li className='p-2 border-t text-gray-700 flex items-center justify-between'>
            <div className='flex items-center'>
                <input type='checkbox' onChange={() => toggleCheck(item.id)} checked={item.completed} id={`item-${item.id}`}/>
                <label className='ml-2 cursor-pointer font-semibold' htmlFor={`item-${item.id}`}>{item.text}</label>
            </div>
            <div>
                <button onClick={() => editItem(item.id)} className='bg-blue-500 text-white px-5 py-2 rounded border mr-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-all'>Edit</button>
                <button onClick={() => deleteItem(item.id)} className='bg-red-500 text-white px-5 py-2 rounded border border-red-500 hover:bg-white hover:text-red-500 transition-all'>Delete</button>
            </div>
        </li>
    );
}

export default TodoItem;