import { Badge, Col, Container, Row, Image } from "react-bootstrap";
import "../App.css";

function HomePage() {
  return (
    <Container className="mt-4">
      <section>
        <h1>
          Bienvenido a{" "}
          <Badge className="bg-twice-purple">
            <small>Twice Wiki</small>
          </Badge>
        </h1>
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={8}>
            <p>
              <span className="px-2 bg-twice-purple text-white">TWICE</span> es
              un grupo femenino surcoreano formado por JYP Entertainment en 2015
              a través del programa de supervivencia "Sixteen". Está compuesto
              por nueve integrantes: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina,
              Dahyun, Chaeyoung y Tzuyu. Debutaron oficialmente el 20 de octubre
              de 2015 con el mini álbum "The Story Begins". Desde entonces, han
              ganado reconocimiento internacional con éxitos como "Cheer Up",
              "TT" y "Fancy". Su música abarca géneros como K-pop, J-pop y
              dance-pop, destacándose por coreografías enérgicas y melodías
              pegajosas. A lo largo de su carrera,{" "}
              <span className="px-2 bg-twice-purple text-white">TWICE</span> ha
              lanzado múltiples álbumes y sencillos, consolidándose como uno de
              los grupos femeninos más influyentes en la escena musical asiática.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Image
                width={300}
              rounded
              src="https://lastfm.freetls.fastly.net/i/u/ar0/32512882b13885c98899d212ff1fb438.jpg"
              className="img-fluid"
              alt="Imagen de la banda TWICE"
            />
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={4} className="text-center">
            <Image
              rounded
              src="https://i.ytimg.com/vi/bUrQbt1jR4A/maxresdefault.jpg"
              className="img-fluid"
              alt="TWICE en una presentación en vivo"
            />
          </Col>
          <Col xs={12} md={8}>
            <p className="mt-sm-4 mt-md-0">
              A lo largo de su trayectoria,{" "}
              <span className="px-2 bg-twice-purple text-white">TWICE</span> ha
              lanzado varios álbumes de estudio, EPs y sencillos que han
              encabezado las listas de éxitos en Corea del Sur y Japón. Su primer
              álbum de estudio, "Twicetagram" lanzado en 2017, incluye el
              exitoso sencillo "Likey". En 2018, debutaron en Japón con el álbum
              "#Twice", que contiene versiones en japonés de sus canciones más
              populares. Además de su éxito musical,{" "}
              <span className="px-2 bg-twice-purple text-white">TWICE</span> ha
              realizado giras mundiales, llevando su música a fans de todo el
              mundo y consolidándose como un fenómeno global en el ámbito del
              K-pop.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default HomePage;
