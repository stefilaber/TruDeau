import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
            <Container className="mt-5">
            {
                Array.from(todoMap.keys()).map(date => {
                    const todos = todoMap.get(date)
                    return (
                        <Row className="todos-date-row">
                            <Col lg="2" className="d-flex align-items-center">
                                <p>{date}</p>
                            </Col>
                            <Col>
                                <Container fluid>
                                    <Row>
                                        {
                                            todos?.map(todo => <Col xs="12" sm="6" md="4"><Todo todo={todo} /></Col>)
                                        }
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    )
                })
            }
            </Container>
        </>
    )
}

export default EditTodosPage