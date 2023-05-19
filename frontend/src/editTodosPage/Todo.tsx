import { ITodo } from "./EditTodosPage"
import { Container, Col, Row } from "react-bootstrap"

interface TodoProps {
    todo: ITodo
}

function Todo({ todo } : TodoProps) {
    return (
        <Container className="todo m-2 p-3">
            <Row>
                <Col xs="12" md="8">
                    <h2>{todo.name}</h2>
                </Col>
                <Col className="d-flex justify-content-end">
                    <h3>{new Date(todo.date).toLocaleDateString()}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <p>{todo.description}</p> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Todo
