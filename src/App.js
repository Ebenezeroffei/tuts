import React,{Component} from "react";
import todosData from "./components/todos";
import TodoItem from "./components/Todo";

class App extends Component{

    constructor(){
        super()
        this.state = {
            'todos':todosData
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState  => {
            let updatedTodo = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            console.log(updatedTodo)
            return {
                todos : updatedTodo,
            }
        })
    }

    render(){
        return(
            <div>
                <h4 className='text-center text-xl font-semibold py-2 bg-blue-500 text-white'>Todo</h4>
                <ul className='m-2'>
                    {this.state.todos.map(todo => <TodoItem key={todo.id} handleChange={this.handleChange} item={todo}/>)}
                </ul>
            </div>
        );
    }
}

export default App;