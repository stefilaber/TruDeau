import { Button, Col, Container, Row } from "react-bootstrap"

interface Props {
    date: Date,
    setDate: (date: Date) => void
}

function DateSwitcher({ date, setDate }: Props) {

    const changeDate = (delta: number) => {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() + delta)
        setDate(newDate)
    }

    return (
        <Container className="date-switcher">
            <Row>
                <Col xs="12" className="d-flex justify-content-center"><h1>TODOs for <span className="underlined">{ date.toLocaleDateString() }</span></h1></Col>
            </Row>
            <Row>
                <Col xs="6">
                    <Button className="w-100" onClick={() => changeDate(-1)}>previous day</Button>
                </Col>
                <Col xs="6">
                    <Button className="w-100" onClick={() => changeDate(1)}>next day</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default DateSwitcher
