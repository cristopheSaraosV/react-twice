import { Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";

function NoticiasPage() {
  const news = [
    {
      title: "TWICE anuncia nuevo álbum 'STRATEGY'",
      description:
        "Durante su fanmeeting por el noveno aniversario, TWICE sorprendió a los fans anunciando el lanzamiento de su 14º mini álbum titulado 'STRATEGY'. Además, presentaron en vivo el tema 'Sweetest Obsession'.",
      imageUrl:
        "https://6.soompi.io/wp-content/uploads/image/20240303225436_20240303203307_TWICE.jpg?s=900x600&e=t",
      link: "https://exitoina.perfil.com/noticias/musica/twice-anuncio-el-lanzamiento-de-su-nuevo-album-strategy-y-presento-el-tema-sweetest-obsession.phtml",
    },
    {
      title: "TWICE brilla en 'Today Show' con 'ONE SPARK'",
      description:
        "El grupo k-pop cautivó a su público estadounidense con una brillante presentación de su canción 'ONE SPARK', la cual forma parte de su nuevo miniálbum 'With YOU-th'.",
      imageUrl:
        "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2024/02/23/65d9105211bb376bf307a2a5.jpg",
      link: "https://larepublica.pe/cultura-asiatica/2024/02/23/twice-brilla-con-su-single-one-spark-en-today-show-asi-fue-la-actuacion-del-grupo-kpop-748397",
    },
    {
      title: "TWICE domina Spotify con logros históricos",
      description:
        "TWICE acumula nuevos logros en Spotify con sus canciones y el álbum completo 'Formula of Love: O + T = <3', siendo la primera banda de K-Pop en conseguir esos títulos dentro de la plataforma musical.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0JV4W7LyZRWtsFZwAOFJn4D8PbvamZfhNw&s",
      link: "https://www.nacionrex.com/kpop/TWICE-domina-Spotify-con-logros-historicos-para-el-K-Pop-20211113-0011.html",
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Últimas Noticias de TWICE</h2>
      <Row className="g-4">
        {news.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100">
              <Card.Img
                className="img-fluid fixed-image"
                variant="top"
                src={item.imageUrl}
                alt={item.title}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {item.description}
                </Card.Text>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-twice-blue mt-auto"
                >
                  Leer más
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NoticiasPage;
