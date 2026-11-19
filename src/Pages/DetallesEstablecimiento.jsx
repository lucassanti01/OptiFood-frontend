
import { Container, Card, Badge, Button } from "react-bootstrap";

function DetallesEstablecimiento() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">
        Detalles del establecimiento
      </h1>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title as="h2">
            Café Saludable
          </Card.Title>

          <Card.Text className="text-muted">
            San Miguel de Tucumán
          </Card.Text>

          <Card.Text>
            Establecimiento de ejemplo con alternativas
            alimentarias para personas que buscan opciones
            Sin TACC o para diabéticos.
          </Card.Text>

          <div className="d-flex gap-2 mb-4">
            <Badge bg="success">Sin TACC</Badge>
            <Badge bg="primary">Para diabéticos</Badge>
          </div>

          <Button variant="outline-success" disabled>
            Volver a establecimientos
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetallesEstablecimiento;
