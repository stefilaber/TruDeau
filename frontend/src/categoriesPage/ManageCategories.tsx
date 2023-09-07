import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Category from "./Category";
import AddNewCategoryModal from "./AddNewCategoryModal";

export interface ICategory {
    id: number
    name: string
    color: string
}

function ManageCategories() {

    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        axios.get<ICategory[]>("http://localhost:8080/todoCategories").then(response => {
            setCategories(response.data)
        })
    }, [])

    return (
        <Container>
            <Row >
                {categories.map(category =>
                    <Col className="d-flex flex-wrap" xs="12" sm="6" md="3">
                        <Category key={category.id} category={category} />
                    </Col>
                )}
            </Row>
            <AddNewCategoryModal fetchCategories={() => { axios.get<ICategory[]>("http://localhost:8080/todoCategories").then(response => { setCategories(response.data) }) }} />
        </Container>
    )
}

export default ManageCategories;
