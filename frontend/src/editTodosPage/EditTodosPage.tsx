import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToggleDivider from "../ToggleDivider";
import AddTodoModal from "./AddNewTodoModal";
import TodosByDateList from "./TodosByDateList";

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

    useEffect(() => fetchTodos(setPastTodos, setFutureTodos), [])

    return (
        <Container>
            <ToggleDivider text="past TODOs">
                <TodosByDateList todos={pastTodos} />
            </ToggleDivider>
            <TodosByDateList todos={futureTodos} />
            <Row>
                <Col lg="2"></Col>
                <Col>
                    <div className="modal-div">
                        <AddTodoModal fetchTodos={() => fetchTodos(setPastTodos, setFutureTodos)} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

function fetchTodos(setPastTodos: (todos: ITodo[]) => void, setFutureTodos: (todos: ITodo[]) => void) {
    axios.get<ITodo[]>("http://localhost:8080/simpleTodos").then(response => {
        const todos = response.data
        const now = new Date()

        setPastTodos(todos.filter(todo => new Date(todo.date) < now))
        setFutureTodos(todos.filter(todo => new Date(todo.date) >= now))
    })
}

export default EditTodosPage
