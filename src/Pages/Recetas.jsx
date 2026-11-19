import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Recetas() {
  return (
    <Container className="my-4">
      <h1 className="mb-4">Nuestras recetas</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Ensalada de quinoa</Card.Title>
              <Card.Text>
                Una opción fresca y nutritiva para disfrutar.
              </Card.Text>
              <Button variant="success">Ver receta</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Tarta de verduras</Card.Title>
              <Card.Text>
                Una preparación casera con vegetales frescos.
              </Card.Text>
              <Button variant="success">Ver receta</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Budín de banana</Card.Title>
              <Card.Text>
                Una alternativa dulce para acompañar el desayuno.
              </Card.Text>
              <Button variant="success">Ver receta</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Recetas;