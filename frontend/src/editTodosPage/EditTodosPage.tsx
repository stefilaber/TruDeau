import axios from "axios";
import { useEffect, useState } from "react";
import TodosByDateList from "./TodosByDateList";
import { Container } from "react-bootstrap";
import ToggleDivider from "../ToggleDivider";

export interface ITodo {
    id: number
    name: string
    description?: string
    date: Date
    done: boolean
}

function EditTodosPage() {

    const [pastTodos, setPastTodos] = useState<ITodo[]>([])
    const [futureTodos, setFutureTodos] = useState<ITodo[]>([])

    useEffect(() => {
        axios.get<ITodo[]>("http://localhost:8080/simpleTodos").then(response => {
            const todos = response.data
            const now = new Date()

            setPastTodos(todos.filter(todo => new Date(todo.date) < now))
            setFutureTodos(todos.filter(todo => new Date(todo.date) >= now))
        })
    }, [])

    return (
        <Container>
            <ToggleDivider text="past TODOs">
                <TodosByDateList todos={pastTodos} />
            </ToggleDivider>
            <TodosByDateList todos={futureTodos} />
        </Container>
    )
}

export default EditTodosPage