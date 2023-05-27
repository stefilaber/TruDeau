import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { ITodo } from './EditTodosPage';

interface Props {
    setTodos: (todos: ITodo[]) => void
}

function AddNewTodoModal({ setTodos }: Props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addTodo = () => {
        axios.post('http://localhost:8080/simpleTodos', { name: name, description: description, date: date}).then(response => {
            console.log(response.data)
            axios.get<ITodo[]>('http://localhost:8080/simpleTodos').then(response => {
                const todos: ITodo[] = response.data
                setTodos(todos)
            })
        })
    }

    return (
        <>
            <Button variant="outline-dark" className='modal-button' onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}
                size="lg"
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
                        <Row>
                            <Col> <label> Name </label> </Col>
                            <Col> <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} /> </Col>
                        </Row>
                        <Row>
                            <Col><label> Description </label></Col>
                            <Col><input type="text" name="description" value={description} onChange={event => setDescription(event.target.value)} /></Col>
                        </Row>
                        <Row>
                            <Col><label> Date </label></Col>
                            <Col><input type="date" name="date" value={date} onChange={event => setDate(event.target.value)} /></Col>
                        </Row>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={event => { addTodo(); handleClose(); }}>
                        Add todo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddNewTodoModal