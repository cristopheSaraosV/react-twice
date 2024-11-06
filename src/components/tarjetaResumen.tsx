import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLikes } from '../context/likeContext';
import "./tarjetaResumen.css"

interface TarjetaResumenProps {
  id: string;
  nombre: string;
  descripcion: string;
  img: string;
  colorClase?: string;
  peluche?: string;
}

const TarjetaResumen: React.FC<TarjetaResumenProps> = ({ id, nombre, descripcion, img, colorClase, peluche }) => {
  const { toggleLike, likedItems } = useLikes();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(likedItems.has(id));
  }, [likedItems, id]);

  const handleLikeToggle = () => {
    toggleLike(id);
  };

  const isLikedClass = `d-flex align-items-center justify-content-center button-height border-0 ${liked ? colorClase : 'bg-secondary text-white'}`;

  return (
    <Card className="card-fixed-height" style={{ position: 'relative' }}>
      <Card.Img
        variant="top"
        src={img}
        alt={nombre}
        className="card-img-custom"
      />
      <img
        className='img-peluche'
        width={60}
        src={peluche}
        alt=""
      />
      <Card.Body className="card-body-flex">
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button
          onClick={handleLikeToggle}
          className={isLikedClass}
          style={{ color: liked ? 'white' : 'gray' }}
        >
          {liked ? 'Ya no me gusta' : 'Me gusta'}
          <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'} ms-2`}></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TarjetaResumen;
