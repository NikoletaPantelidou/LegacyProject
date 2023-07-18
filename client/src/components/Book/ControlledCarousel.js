import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Book.css";
import { CarouselItem } from "react-bootstrap";

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external.webstorage.gr/mmimages/image/67/85/11/67/9780135957059-560x560.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6gyaaEzjoUCA2f3dItZDsR2yN_cAXUwOw0kUPsp1byirHMzDJ"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pictures.abebooks.com/isbn/9780134123486-uk.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
