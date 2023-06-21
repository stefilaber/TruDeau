import { Col, Container, Row } from "react-bootstrap";
import { ITodo } from "./EditTodosPage";
import { useEffect, useState } from "react";
import Todo from "./Todo";

interface Props {
    todos: ITodo[];
}

function TodosByDateList({ todos }: Props) {

    const [todoMap, setTodoMap] = useState<Map<string, ITodo[]>>(new Map())

    useEffect(() => {
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

        setTodoMap(todoMap)
    }, [todos])

    return (
        <Container>
            { Array.from(todoMap.keys()).map(date => {
                const todos = todoMap.get(date)
                return (
                    <Row key={date} className="todos-date-row">
                        <Col lg="2" className="d-flex align-items-center">
                            <p>{date}</p>
                        </Col>
                        <Col>
                            <Container fluid>
                                <Row>
                                    { todos?.map(todo =>
                                        <Col key={todo.id} xs="12" sm="6" md="4">
                                            <Todo todo={todo} />
                                        </Col>
                                    ) }
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                )
            }) }
        </Container>
    )
}

export default TodosByDateList
