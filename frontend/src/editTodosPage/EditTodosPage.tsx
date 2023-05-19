import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
    id: number;
    name: string;
    description?: string;
    date: Date;
    done: boolean;
}
function EditTodosPage() {

    const [todos, setTodos] = useState<Todo[]>([])
    useEffect(() => { 
        axios.get<Todo[]>('http://localhost:8080/simpleTodos').then(response => setTodos(response.data))
    }, [])

    return (
        <>
            <h1> Edit your Todos</h1>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
            </ul>
        </>
    )
}

export default EditTodosPage