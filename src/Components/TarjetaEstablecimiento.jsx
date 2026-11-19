
import { Card, Badge } from "react-bootstrap";

function TarjetaEstablecimiento({ nombre, ubicacion, opciones }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>

        <Card.Text className="text-muted">
          {ubicacion}
        </Card.Text>

        <div className="d-flex gap-2 flex-wrap">
          {opciones.includes("sin-tacc") && (
            <Badge bg="success">Sin TACC</Badge>
          )}

          {opciones.includes("diabeticos") && (
            <Badge bg="primary">Para diabéticos</Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default TarjetaEstablecimiento;
