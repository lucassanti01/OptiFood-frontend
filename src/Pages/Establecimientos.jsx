
import { Container, Row, Col, Button } from "react-bootstrap";
import TarjetaEstablecimiento from "../Components/TarjetaEstablecimiento";

function Establecimientos() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-3">
        Establecimientos
      </h1>

      <p className="text-center text-muted mb-4">
        Encontrá establecimientos gastronómicos con
        opciones Sin TACC y para personas con diabetes.
      </p>

      <div className="d-flex justify-content-center gap-3 mb-5">
        <Button variant="outline-success">
          Sin TACC
        </Button>

        <Button variant="outline-success">
          Para diabéticos
        </Button>
      </div>

      <Row className="g-4">
        <Col md={4}>
          <TarjetaEstablecimiento
            nombre="Café Saludable"
            ubicacion="San Miguel de Tucumán"
            opciones={["sin-tacc", "diabeticos"]}
          />
        </Col>

        <Col md={4}>
          <TarjetaEstablecimiento
            nombre="Rincón Sin Gluten"
            ubicacion="Yerba Buena"
            opciones={["sin-tacc"]}
          />
        </Col>

        <Col md={4}>
          <TarjetaEstablecimiento
            nombre="Dulce Equilibrio"
            ubicacion="Tafí Viejo"
            opciones={["diabeticos"]}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Establecimientos;
