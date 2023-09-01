import { ICategory } from './ManageCategories'
import { Container, Row, Col } from 'react-bootstrap'

interface TodoProps {
    category: ICategory
}

function Category({ category }: TodoProps) {
    return (
        <Container className="category m-2 p-3" style = {{backgroundColor:category.color}}>
            <Row>
                <Col xs="12" md="8">
                    <h2>{category.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{category.color}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Category