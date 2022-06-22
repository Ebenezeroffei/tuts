import React from 'react'

const AddOrEditTodoItem = ({addOrEditItem}) => {
    return <React.Fragment>
        <div className='border shadow mb-3 p-2 rounded flex justify-between'>
            <input id='todo-item-input' type='text' className='border border-gray-400 rounded w-full p-2 text-gray-700'/>
            <button id='add-or-edit-item' onClick={addOrEditItem} className='ml-2 bg-green-400 px-6 rounded text-lg border-2 border-green-400 py-1 text-white hover:text-green-400 hover:bg-white transition-all duration-250'>Add</button>
        </div>
    </React.Fragment>
}

export default AddOrEditTodoItem;