import { useState } from "react"
import { ITodo } from "./EditTodosPage"
import { Container, Col, Row } from "react-bootstrap"

interface TodoProps {
    todo: ITodo
}

// https://gist.github.com/renancouto/4675192
// Copyright (c) 2013 renancouto
function lightenColor(color: string, percent: number) {
    const num = parseInt(color.substring(1), 16)
    const amt = Math.round(2.55 * percent)
    const R = (num >> 16) + amt
    const B = (num >> 8 & 0x00FF) + amt
    const G = (num & 0x0000FF) + amt

    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1) // nosonar, ternary operators are fine here
}

function Todo({ todo } : TodoProps) {

    const [backgroundColor, setBackgroundColor] = useState<string>(todo.category?.color)

    const onMouseEnter = () => setBackgroundColor(lightenColor(todo.category?.color, 20))
    const onMouseLeave = () => setBackgroundColor(todo.category?.color)

    const style = () => todo.category && {backgroundColor: backgroundColor}

    return (
        <Container className="todo m-2 p-3" style={style()} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Row>
                <Col xs="12" md="8">
                    <h2>{todo.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{todo.description}</p>
                </Col>
            </Row>
            <div></div>
        </Container>
    )
}

export default Todo
