import React from 'react'

// class Todo extends React.Component{

//     render() {
//         let {id,text,completed,handleChange} = this.props;
//         return (
//             <li>
//                 <input
//                     id={`item-${this.props.id}`} 
//                     type='checkbox' 
//                     checked={this.props.completed}
//                     onChange={() => this.props.handleChange(id)}
//                 />
//                 <label className='ml-2'>{text}</label>
//             </li>
//         )
//     }
// }

function TodoItem(props){
    return (
        <li>
            <input
                type='checkbox' 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <label className='ml-2'>{props.item.text}</label>
        </li>
    )
}

export default TodoItem;