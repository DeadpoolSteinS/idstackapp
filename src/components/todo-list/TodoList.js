import './TodoList.css';

const TodoList = (props) => {
    return (
        props.dataTodos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>
        })
    );
}

export default TodoList;