import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Todo from "./Todo";

export interface ITodo {
    id: number;
    name: string;
    description?: string;
    date: Date;
    done: boolean;
}

function EditTodosPage() {

    const [todoMap, setTodoMap] = useState<Map<string, ITodo[]>>(new Map())

    useEffect(() => { 
        axios.get<ITodo[]>('http://localhost:8080/simpleTodos').then(response => {
            const todos: ITodo[] = response.data
            const todoMap: Map<string, ITodo[]> = new Map()

            todos.forEach(todo => {
                const date = new Date(todo.date).toLocaleDateString()
                const list : ITodo[] | undefined = todoMap.get(date)

                if (list) {
                    list.push(todo)
                } else {
                    todoMap.set(date, [todo])
                }

            })

            console.log(todoMap)
            setTodoMap(todoMap)
        })
    }, [])

    return (
        <>
            <h1>Edit your Todos</h1>
            {
                Array.from(todoMap.keys()).map(date => {
                    const todos = todoMap.get(date)
                    if (todos) {
                        return (
                            <Container>
                                <h2>{date}</h2>
                                {
                                    todos.map(todo => <Todo todo={todo} />)
                                }
                            </Container>
                        )
                    }
                })
            }
        </>
    )
}

export default EditTodosPage