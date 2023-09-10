import React, { MouseEventHandler } from "react"
import { Col, Container, Row } from "react-bootstrap"

interface CardProps {
    title: string
    content: string
    style: React.CSSProperties | undefined
    onMouseEnter: MouseEventHandler | undefined
    onMouseLeave: MouseEventHandler | undefined
}

function Card({ title, content, style, onMouseEnter, onMouseLeave }: CardProps) {

    return (
        <Container className="card m-2 p-3" style={style}
                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Row>
                <Col xs="12" md="8">
                    <h2>{title}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{content}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Card
