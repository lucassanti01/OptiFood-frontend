import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function Recetas() {
    const [busqueda, setBusqueda] = useState('');
    const recetas = [
        {
            id: 1,
            nombre: 'Ensalada de quinoa',
            descripcion: 'Una opción fresca y nutritiva para disfrutar.'
        },
        {
            id: 2,
            nombre: 'Tarta de verduras',
            descripcion: 'Una preparación casera con vegetales frescos.'
        },
        {
            id: 3,
            nombre: 'Budín de banana',
            descripcion: 'Una alternativa dulce para acompañar el desayuno.'
        }
    ];
    const normalizarTexto = (texto) =>
        texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const recetasFiltradas = recetas.filter((receta) =>
        normalizarTexto(receta.nombre).includes(normalizarTexto(busqueda))
    );
    
    return (
        <Container className="my-4">
            <h1 className="mb-4">Nuestras recetas</h1>
            <Form.Control
                type="text"
                placeholder="Buscar recetas..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="mb-4"
            />

            <Row>
                {recetasFiltradas.map((receta) => (
                    <Col md={4} key={receta.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{receta.nombre}</Card.Title>
                                <Card.Text>{receta.descripcion}</Card.Text>
                                <Button variant="success">Ver receta</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Recetas;