import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PlusLg } from 'react-bootstrap-icons';

interface Props {
    fetchTodos: () => void
}

function AddNewTodoModal({ fetchTodos }: Props) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const addTodo = () => {
        axios.post('http://localhost:8080/simpleTodos', { name: name, description: description, date: date }).then(() => {
            fetchTodos()
        })
    }

    return (
        <>
            <Button className='modal-button' onClick={handleShow}>
                <PlusLg />
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add New Todo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Container className='p-2'>
                            <Row className="mb-2">
                                <Col xs="6"> <label>Name</label> </Col>
                                <Col xs="6"> <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} className='w-100'/> </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs="6"><label>Description</label></Col>
                                <Col xs="6"><input type="text" name="description" value={description} onChange={event => setDescription(event.target.value)} className='w-100'/></Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs="6"><label>Date</label></Col>
                                <Col xs="6"><input type="date" name="date" value={date} onChange={event => setDate(event.target.value)} className='w-100'/></Col>
                            </Row>
                        </Container>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { addTodo(); handleClose(); }}>
                        Add todo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddNewTodoModal