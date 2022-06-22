import React,{useState} from 'react';
import NavBar from './NavBar';
import Todo from './Todo';
import AddTodoItem from './AddOrEditTodoItem';
import todos from './todos';

const Todos = () => {
    const [todoItems,setTodo] = useState(todos);

    const toggleCheck = (id) => {
        setTodo(prevTodo => {
            let updatedTodoItems = prevTodo.map(todo => {
                return todo.id === id ? {...todo, 'completed': !todo.completed} : todo;
            });
            
            return updatedTodoItems;
        })
    }

    const addOrEditItem = (e) => {
        let todoItem = document.getElementById('todo-item-input').value;
        if(e.target.innerHTML === "Add"){
            if(todoItem){
                let newTodo = {
                    id: todoItems.length + 1,
                    text: todoItem,
                    completed: false,
                }
                setTodo([...todoItems,newTodo]);
                // Clear input
                document.getElementById('todo-item-input').value = '';
            }
        }
        else{
            if(todoItem){
                let todoId = Number(e.target.getAttribute('data-todo-item-id'));
                setTodo(prevTodo => {
                    let updatedTodos = prevTodo.map(todo => {
                        if(todo.id === todoId){
                            todo.text = todoItem;
                        }
                        return {...todo};
                    })
                    return updatedTodos;
                })
                e.target.innerHTML = "Add";
                document.getElementById('todo-item-input').value = '';
            }
            else{
                e.target.innerHTML = "Add";
            }
        }
    }

    const deleteItem = (id) => {
        setTodo(todoItems.filter(todo => todo.id !== id));
    }

    const editItem = (id) => {
        let itemText = todoItems.filter(todo => todo.id === id)[0].text;
        // Update input field and button
        document.getElementById('todo-item-input').value = itemText;
        let button = document.getElementById('add-or-edit-item')
        button.innerHTML = "Edit";
        button.setAttribute('data-todo-item-id',id)
        
    }

    return (
        <>
            <main className='select-none'>
                <NavBar/>
                <section className='m-6'>
                    <AddTodoItem addOrEditItem={addOrEditItem}/>
                    <Todo toggleCheck={toggleCheck} deleteItem={deleteItem} editItem={editItem} todoItems={todoItems}/>
                </section>

            </main>
        </>
    )
}

export default Todos;