import { Col, Container, Row } from "react-bootstrap";
import TarjetaResumen from "../components/tarjetaResumen";
import { useLikes } from "../context/likeContext";
import miembros from "../member.json";

function MemberPage() {
    const { likedItems } = useLikes();

  return (
    <Container>
    <Row className="mt-5">
      <Col md={12}>
        <h1 className="mb-4">Selecciona tus integrantes favoritas</h1>
        <h5>Mis favoritas: {[...likedItems].join(", ")}</h5>
      </Col>

      {miembros.map((miembro) => (
        <Col key={miembro.id} sm={12}  md={6} lg={4} xl={3} className="p-3">
          <TarjetaResumen {...miembro} />
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default MemberPage;