import React from "react";
import { Button } from "@mui/material";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Book(props) {
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async (req, res) => {
    console.log(_id);
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((data) => {
        window.alert("Are you sure you want to delete this item?");
        console.log(data);
      })
      .then(() => navigate("http://localhost:5000"))
      .then(() => navigate("/"));
    window.location.reload();
  };

  return (
    <div className="card">
      <img className="card-images" src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>

      <h3>Rs: {price} $</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
}

export default Book;
